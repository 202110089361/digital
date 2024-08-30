// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Error() {
  return (
    <div className="bg-[url('/images/SubscriptionImg.png')] pb-20 relative bg-cover bg-center">
          <div className="flex flex-col items-center justify-center mt-12 pt-20 pb-20">
            <div className="pb-20 w-3/4 flex items-center justify-center flex-col">
              <div className="flex items-center justify-center pt-20">
                <span className="block font-bold text-4xl text-black font-[Arial]">Please go to&nbsp;</span>
                {/* <span className="text-[#785fdb] font-bold text-4xl">
                  <SignedOut>
                    <SignInButton><button className="underline font-[Arial]">Sign In</button></SignInButton>
                  </SignedOut>
                  <SignedIn>
                  </SignedIn>
                  <UserButton afterSignOutUrl='/'>
                    <UserButton.UserProfilePage
                      label="My Orders"
                      url="orders"
                      labelIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V9zm6-4a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V5zm5 7a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v4z" clipRule="evenodd" />
                      </svg>}
                    >
                    </UserButton.UserProfilePage>
                  </UserButton>
                </span> */}
              </div>
            </div>
          </div>
        </div>
  )
}