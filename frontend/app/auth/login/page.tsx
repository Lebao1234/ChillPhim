"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-[450px] bg-black/75 px-8 py-12 rounded-lg shadow-lg sm:px-16 sm:py-16 min-h-[600px] flex flex-col">
        <h2 className="text-3xl font-bold text-white mb-7 text-left">
          Đăng nhập
        </h2>

        <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
          {/* Email Input - Sử dụng Shadcn UI Input */}
          <div className="relative group">
            <Input
              type="text"
              placeholder="Email hoặc số điện thoại di động"
              className="h-12 w-full rounded-md border-transparent bg-[#333] px-5 py-0 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors"
              required
            />
          </div>

          {/* Password Input - Sử dụng Shadcn UI Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="h-12 w-full rounded-md border-transparent bg-[#333] px-5 py-0 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors pr-10" // pr-10 để tránh text đè lên icon mắt
              required
            />
            {/* Icon ẩn/hiện mật khẩu */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-[#8c8c8c] hover:text-white transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Submit Button - Sử dụng Shadcn UI Button */}
          <Button
            type="submit"
            className="mt-6 h-12 w-full rounded-md bg-[#e50914] text-[16px] font-bold text-white hover:bg-[#c11119] transition-all"
          >
            Đăng nhập
          </Button>

          {/* OR Divider */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-[#8c8c8c] text-[13px] font-medium">HOẶC</span>
          </div>

        <div className="flex flex-row gap-3">
            <Button
              type="button"
              className="h-12 flex-1 rounded-sm bg-white text-black hover:bg-gray-200 font-medium flex items-center justify-center gap-2 transition-all"
            >
              <span>Google</span>
            </Button>

            <Button
              type="button"
              className="h-12 flex-1 rounded-sm bg-[#1877F2] text-white hover:bg-[#1864cc] font-medium flex items-center justify-center gap-2 transition-all"
            >
              <span>Facebook</span>
            </Button>
          </div>


          {/* Forgot Password */}
          <div className="text-center mt-2">
            <Link href="#" className="text-white hover:underline text-[15px]">
              Bạn quên mật khẩu?
            </Link>
          </div>
        </form>

        {/* Footer actions */}
        <div className="mt-10 flex flex-col gap-4 text-[#8c8c8c]">
          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2">
            {/* Vì bạn chưa có component Checkbox trong ảnh, tôi dùng input native styling Tailwind để tránh lỗi import */}
            <input
              type="checkbox"
              id="remember"
              defaultChecked
              className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-500 bg-transparent text-white focus:ring-1 focus:ring-white checked:bg-white checked:text-black cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-[13px] text-white cursor-pointer select-none"
            >
              Ghi nhớ tôi
            </label>
          </div>

          {/* Sign Up Link */}
          <div className="text-[16px] mt-2">
            Bạn mới sử dụng Netflix?{" "}
            <Link href="/auth/register" className="text-white hover:underline font-medium">
              Đăng ký ngay.
            </Link>
          </div>

          {/* Captcha Disclaimer */}
          <div className="text-[13px] mt-2 text-[#8c8c8c] leading-tight">
            <p>
              Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải
              là robot.{" "}
              <Link href="#" className="text-[#0071eb] hover:underline">
                Tìm hiểu thêm.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}