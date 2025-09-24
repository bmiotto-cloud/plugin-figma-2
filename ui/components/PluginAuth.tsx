import React, { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-uyq1pzwans";

interface PluginAuthProps {
  onAuthenticated: () => void;
}

function OutlinedClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outlined / close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / close">
          <path d={svgPaths.p2e270200} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedLock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outlined / lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / lock">
          <path d={svgPaths.p8e21980} fill="var(--fill-0, #3E4242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function OutlinedVisibility({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[24px] cursor-pointer" 
      data-name="Outlined / visibility"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outlined / visibility">
          <mask height="24" id="mask0_14_8062" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_14_8062)">
            <path d={svgPaths.p8d5ba80} fill="var(--fill-0, #3E4242)" id="vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}


export interface PluginAuthProps {
  onAuthenticated: () => void;
  onNotify?: (message: string, isError?: boolean) => void; 
}

export function PluginAuth({ onAuthenticated, onNotify }: PluginAuthProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [showDebug, setShowDebug] = useState(false);

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const checkExistingAuth = () => {
      try {
        const authData = localStorage.getItem('instaffo_plugin_auth');
        if (authData) {
          const { timestamp, authenticated } = JSON.parse(authData);
          // Check if auth is still valid (24 hours)
          const authAge = Date.now() - timestamp;
          const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
          
          if (authenticated && authAge < maxAge) {
            onAuthenticated();
            return;
          } else {
            // Auth expired, clear it
            localStorage.removeItem('instaffo_plugin_auth');
          }
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        localStorage.removeItem('instaffo_plugin_auth');
      }
      setIsCheckingAuth(false);
    };

    checkExistingAuth();
  }, [onAuthenticated]);

  const testServerConnection = async () => {
    try {
      const { projectId, publicAnonKey } = await import('../supabaseClient');
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-1d4ca023/health`;
      
      console.log('Testing server connection to:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      
      const result = await response.json();
      console.log('Health check response:', result);
      return result;
    } catch (error) {
      console.error('Health check error:', error);
      throw error;
    }
  };

  const validatePassword = async (inputPassword: string): Promise<boolean> => {
    try {
      // Import project details
      const { projectId, publicAnonKey } = await import('../supabaseClient');
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-1d4ca023/validate-plugin-access`;
      
      console.log('Validating password at:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ password: inputPassword }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response error:', response.status, errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Server validation response:', result);
      return result.valid === true;
    } catch (error) {
      console.error('Password validation error:', error);
      throw error; // Re-throw to get more specific error message
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const isValid = await validatePassword(password);
      
      if (isValid) {
        // Store authentication state with timestamp
        const authData = {
          authenticated: true,
          timestamp: Date.now()
        };
        localStorage.setItem('instaffo_plugin_auth', JSON.stringify(authData));
        onAuthenticated();
      } else {
        setError('Invalid access code. Please contact your team administrator.');
        setPassword('');
      }
    } catch (error) {
      // Show more specific error message
      const errorMessage = error instanceof Error ? error.message : 'Authentication error. Please try again.';
      setError(errorMessage);
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking existing auth
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="flex items-center space-x-3 text-gray-600">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span>Checking access...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Radio Button">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d3d4d6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
                <div className="font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[18px] text-black text-center text-nowrap">
                  <p className="leading-[24px] whitespace-pre">Instaffo copywriter</p>
                </div>
                <OutlinedClose />
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="h-[180px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-[8px] h-[180px] items-center justify-center px-[16px] py-[64px] relative w-full">
                <form onSubmit={handleSubmit} className="w-full space-y-2">
                  {/* Text Input */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text input">
                    {/* Label */}
                    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-full" data-name=".Label">
                      <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#3e4242] text-[16px] text-nowrap">
                        <p className="leading-[24px] whitespace-pre">Access code</p>
                      </div>
                    </div>
                    
                    {/* Field */}
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Field">
                      <div aria-hidden="true" className="absolute border-2 border-[#7a7c84] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
                          <OutlinedLock />
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter access code"
                            className="basis-0 flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3e4242] text-[14px] text-nowrap bg-transparent border-none outline-none w-full"
                            disabled={isLoading}
                            required
                          />
                          <OutlinedVisibility onClick={() => setShowPassword(!showPassword)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                
                {/* Error Message */}
                {error && (
                  <div className="flex flex-col font-['Aeonik_Pro:Regular',_sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-red-600 text-[12px] w-[216px]">
                    <p className="leading-[16px]">{error}</p>
                  </div>
                )}
                
                {/* Authorization Text */}
                <div className="flex flex-col font-['Aeonik_Pro:Medium',_sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#5e2f82] text-[12px] w-[216px]">
                  <p className="leading-[16px]">Authorized Instaffo team members only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#d3d4d6] border-solid inset-[-1px] pointer-events-none" />
            <div className="flex flex-row items-center justify-end relative size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[16px] relative w-full">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading || !password.trim()}
                  className={`basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 ${
                    isLoading || !password.trim() 
                      ? 'bg-[#f5f5f7] cursor-not-allowed' 
                      : 'bg-[#5e2f82] hover:bg-[#4a2568] cursor-pointer'
                  } transition-colors`}
                  data-name="Action Button"
                >
                  <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <div className={`font-['Aeonik_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap ${
                        isLoading || !password.trim() ? 'text-[#7a7c84]' : 'text-white'
                      }`}>
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                            <span className="leading-[20px] whitespace-pre">Verifying...</span>
                          </div>
                        ) : (
                          <p className="leading-[20px] whitespace-pre">Access plugin</p>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Debug Section */}
          {showDebug && (
            <div className="w-full px-4 pb-4">
              <div className="text-center space-y-2">
                <button
                  onClick={async () => {
                    try {
                      const health = await testServerConnection();
                      alert(`Server Status: ${JSON.stringify(health, null, 2)}`);
                    } catch (error) {
                      alert(`Server Error: ${error}`);
                    }
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800 underline"
                >
                  Test Server Connection
                </button>
              </div>
            </div>
          )}
          
          <div className="w-full text-center pb-2">
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              {showDebug ? 'Hide' : 'Show'} Debug
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}