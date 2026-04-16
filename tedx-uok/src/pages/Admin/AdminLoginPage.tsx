import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { formatTedxText } from "../../utils/textFormatting";

export default function AdminLoginPage() {
  const { signIn, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // If already admin, redirect
  useEffect(() => {
    if (!loading && isAdmin) {
      navigate("/admin/dashboard");
    }
  }, [loading, isAdmin, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: authError } = await signIn(email, password);

    if (authError) {
      setError("Invalid credentials. Please try again.");
      setSubmitting(false);
      return;
    }
    // checkAdmin runs in useAuth, redirect on next render
    navigate("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            {formatTedxText("TEDx UoK", true)}
          </h1>
          <p className="text-white/50 text-sm">Admin Portal</p>
        </div>
        <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Sign In</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black border-2 border-[#1F1F1F] focus:border-[#EB0028] rounded-lg px-4 py-3 text-white outline-none"
                placeholder="admin@tedxuok.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black border-2 border-[#1F1F1F] focus:border-[#EB0028] rounded-lg px-4 py-3 text-white outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#EB0028] text-white py-3 rounded-lg font-bold hover:bg-[#c7001f] transition-colors disabled:opacity-50"
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
