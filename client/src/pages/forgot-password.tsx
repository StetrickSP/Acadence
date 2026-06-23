import { Link } from 'react-router-dom'
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthCard } from "@/components/auth/auth-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard
        title="Reset Password"
        description="Enter your email to receive a password reset link"
        footer={
          <div className="w-full text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link to="/sign-in" className="text-accent hover:underline">
              Back to Sign In
            </Link>
          </div>
        }
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <Link to="/sign-in">
            <Button type="button" className="w-full">
              Send Reset Link
            </Button>
          </Link>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
