"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Home, Target, Trophy, Flag, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useUser } from "@/contexts/UserContext";
import { supabase } from "@/database/supabase";
import { RoleType } from "@/types/role";
import ProfileDialog from "./modals/profile-dialog";

function getNavsByRoleType(roleType: RoleType) {
  return roleType === "support_runner" ? (
    <div className="hidden md:flex space-x-6">
      <Link href="/supporting" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
        <Home size={20} />
        <span>supporting</span>
      </Link>
    </div>
  ) : (
    <div className="hidden md:flex space-x-6">
      <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link href="/goals" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
        <Target size={20} />
        <span>Goals</span>
      </Link>
      <Link href="/achievements" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
        <Trophy size={20} />
        <span>Achievements</span>
      </Link>
      <Link href="/community" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
        <Users size={20} />
        <span>Community</span>
      </Link>
      <Link href="/challenge" className="flex items-center gap-2 text-gray-400 hover:text-white">
        <Flag className="h-4 w-4" />
        Challenge
      </Link>
    </div>
  );
}

export function NavigationBar() {
  const { user } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<RoleType>("challenger");
  const [profileDialogOpen, setProfileDialogOpen] = useState(false)

  const role = user?.user_metadata?.role

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      toast.success("Signed out successfully!")
      router.push("/")
    } catch (error) {
      toast.error("Error signing out. Please try again.")
      console.error("Error signing out:", error)
    }
  }

  const getTabByRoleType = useCallback((roleType: RoleType | null) => {
    if (!roleType) return null;

    if (roleType === "support_runner") {
      return (
        <div className="flex rounded-full bg-white/10 p-1">
          <Button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeTab === "challenger" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("challenger")}
          >
            Challenger
          </Button>
          <Button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeTab === "support_runner" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("support_runner")}
          >
            Support Runner
          </Button>
        </div>
      )
    } else {
      return (
        <Button variant="none" onClick={() => setProfileDialogOpen(true)}>
          Be Support Runner
        </Button>
      )
    }
  }, [activeTab, setActiveTab])

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="font-bold text-xl">
            Peer Goal Tracker
          </Link>
          {getNavsByRoleType(activeTab)}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {getTabByRoleType(role)}
              <Button variant="ghost" className="font-semibold" onClick={() => router.push("/coaching")}>
                0 points
              </Button>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut size={20} className="mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                pricing
              </Link>
              <Button variant="outline" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <ProfileDialog open={profileDialogOpen} onOpenChange={setProfileDialogOpen} />
    </nav>
  );
}