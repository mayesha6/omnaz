import axios from 'axios';

// ১. গ্লোবাল ক্লায়েন্ট তৈরি
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // যদি ব্যাকএন্ড থেকে HTTP-only cookie ব্যবহার করেন, তবে এটি আনকমেন্ট করুন
});

// ২. Request Interceptor (API কল সার্ভারে যাওয়ার ঠিক আগে কাজ করবে)
apiClient.interceptors.request.use(
  (config) => {
    // ব্রাউজার সাইডে (Client Component) থাকলে লোকাল স্টোরেজ থেকে টোকেন নেবে
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ৩. Response Interceptor (সার্ভার থেকে রেসপন্স আসার ঠিক পরে কাজ করবে)
apiClient.interceptors.response.use(
  (response) => {
    // রেসপন্স ঠিক থাকলে সরাসরি ডেটা রিটার্ন করবে
    return response;
  },
  (error) => {
    // গ্লোবাল এরর হ্যান্ডলিং (যেমন: টোকেন এক্সপায়ার হলে 401 আনঅথোরাইজড এরর আসবে)
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        console.error('Session expired. Redirecting to login...');
        // টোকেন রিমুভ করে লগিন পেজে রিডাইরেক্ট করে দিন
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);