"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      {/* Logo Netflix */}
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-[#e50914] text-4xl font-bold uppercase tracking-tighter cursor-pointer">
          NETFLIX
        </h1>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-[500px] bg-black/75 px-8 py-10 rounded-lg shadow-lg sm:px-14 sm:py-12 min-h-[600px] flex flex-col">
        <h2 className="text-3xl font-bold text-white mb-6 text-left">
          Đăng Ký
        </h2>

        <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
          
          {/* 1. Họ và tên */}
          <div className="relative group">
            <Input
              type="text"
              placeholder="Họ và tên"
              className="h-12 w-full rounded-sm border-transparent bg-[#333] px-5 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors"
              required
            />
          </div>

          {/* 2. Email */}
          <div className="relative group">
            <Input
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded-sm border-transparent bg-[#333] px-5 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors"
              required
            />
          </div>

          {/* 3. Số điện thoại */}
          <div className="relative group">
            <Input
              type="tel"
              placeholder="Số điện thoại"
              className="h-12 w-full rounded-sm border-transparent bg-[#333] px-5 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors"
              required
            />
          </div>

          {/* 4. Mật khẩu */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="h-12 w-full rounded-sm border-transparent bg-[#333] px-5 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-[#8c8c8c] hover:text-white transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* 5. Nhập lại mật khẩu */}
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              className="h-12 w-full rounded-sm border-transparent bg-[#333] px-5 text-white placeholder:text-[#8c8c8c] focus-visible:bg-[#454545] focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-[#e59014] transition-colors pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-[#8c8c8c] hover:text-white transition-colors"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-4 h-12 w-full rounded-sm bg-[#e50914] text-[16px] font-bold text-white hover:bg-[#c11119] transition-all"
          >
            Đăng Ký
          </Button>

        </form>

        {/* Footer actions */}
        <div className="mt-8 flex flex-col gap-4 text-[#8c8c8c]">
          
          {/* Link chuyển sang trang Login */}
          <div className="text-[16px]">
            Đã có tài khoản?{" "}
            <Link href="/auth/login" className="text-white hover:underline font-medium">
              Đăng nhập ngay.
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