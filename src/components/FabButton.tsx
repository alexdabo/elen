import type { ButtonHTMLAttributes } from "react";

type FabProps = Omit<    ButtonHTMLAttributes<HTMLButtonElement>,    "className" | "children"> & {
    tooltip?: string
};

export const Fab: React.FC<FabProps> = ({tooltip, ...props}) => {
    return (
        <div className="group fixed sm:hidden bottom-20 right-4 z-50 ">
            <button
                {...props}

                className="
          flex size-14 items-center justify-center
          rounded-full
          bg-primary-500
          text-white
          shadow-lg

          transition-all duration-200 ease-out

          hover:scale-105
          hover:bg-primary-600
          hover:shadow-xl

          active:scale-95
          active:bg-primary-700

          focus:outline-none
          focus:ring-2
          focus:ring-primary-200
          focus:ring-offset-2

          motion-safe:animate-[fab-enter_250ms_ease-out]
        "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="
            size-6
            transition-transform duration-200 ease-out
            group-hover:scale-105
          "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </button>

            {/* Tooltip */}
            {tooltip && <span
                role="tooltip"
                className="
          pointer-events-none
          absolute right-full top-1/2 mr-3
          -translate-y-1/2
          whitespace-nowrap

          rounded-xl
          bg-gray-900
          px-3 py-2

          text-sm font-medium
          text-white
          shadow-lg

          opacity-0
          transition-opacity duration-200 ease-out

          group-hover:opacity-100
          group-focus-within:opacity-100
        "
            >
                {tooltip}
            </span>}
        </div>
    );
};
