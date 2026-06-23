import { Link } from 'react-router-dom'
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthCard } from "@/components/auth/auth-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SignIn() {
  return (
    <AuthLayout>
      <AuthCard
        title="Sign In"
        description="Enter your credentials to access your account"
        footer={
          <div className="w-full space-y-2 text-sm">
            <div>
              <Link to="/forgot-password" className="text-accent hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-accent hover:underline">
                Create one
              </Link>
            </div>
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
          <Link to="/dashboard">
            <Button type="button" className="w-full">
              Sign In
            </Button>
          </Link>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
