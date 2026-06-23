import { Link } from 'react-router-dom'
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthCard } from "@/components/auth/auth-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SignUp() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        description="Sign up to get started"
        footer={
          <div className="w-full text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-accent hover:underline">
              Sign in
            </Link>
          </div>
        }
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
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
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <Link to="/dashboard">
            <Button type="button" className="w-full">
              Create Account
            </Button>
          </Link>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
