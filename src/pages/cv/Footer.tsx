export default function Footer() {
    return <>
        <div className="flex md:hidden fixed bottom-0 left-0 right-0 justify-between px-3 py-2 bg-white shadow-md text-[var(--main-color)]">
          <a href="/">
            <div>
              <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 5c1.73 0 3 1.27 3 3s-1.27 3-3 3-3-1.27-3-3 1.27-3 3-3m0 13a7.98 7.98 0 0 1-5.48-2.18C7.33 16.16 9.03 15 11 15h2c1.97 0 3.66 1.16 4.47 2.82A7.94 7.94 0 0 1 12 20"></path>
              </svg>
            </div>
          </a>
          <a href="/experience">
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
              <path d="M12 10.36a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 1 0 0-3.28"></path>
              <path d="M20 4h-8.59L10 2.59C9.63 2.22 9.11 2 8.59 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-4.64 8c0 .2-.02.4-.06.61l.35.2c.32.19.44.61.25.93l-.45.77c-.19.32-.61.44-.93.25l-.36-.21c-.31.26-.66.47-1.04.61v.41c0 .38-.31.68-.68.68h-.89a.68.68 0 0 1-.68-.68v-.41c-.37-.14-.73-.34-1.04-.61l-.36.21c-.33.19-.74.08-.93-.25l-.45-.77a.675.675 0 0 1 .25-.93l.35-.2a3.1 3.1 0 0 1 0-1.22l-.35-.2a.686.686 0 0 1-.25-.93l.45-.77c.19-.33.61-.44.93-.25l.36.21c.31-.26.66-.47 1.04-.61v-.41c0-.38.31-.68.68-.68h.89c.38 0 .68.31.68.68v.41c.37.14.73.34 1.04.61l.36-.21c.32-.19.74-.08.93.25l.45.77c.19.33.08.74-.25.93l-.35.2c.04.2.06.4.06.61"></path>
            </svg>
          </a>
          <a href="/education">
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
              <path className="b" d="m21.45,8.61l-9-4.5c-.28-.14-.61-.14-.89,0l-6,3-3,1.5-1,.5c-.34.17-.55.52-.55.89v6h2v-5.38l8.55,4.28c.14.07.29.11.45.11s.31-.04.45-.11l9-4.5c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Z"></path>
              <path className="b" d="m12,17c-.46,0-.93-.11-1.34-.32l-5.66-2.83v1.59c0,2.06,3.12,4.56,7,4.56s7-2.49,7-4.56v-1.59l-5.66,2.83c-.41.21-.88.32-1.34.32Z"></path>
            </svg>
          </a>
          <a href="/course">
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
              <path d="M12 2A3 3 0 1 0 12 8 3 3 0 1 0 12 2z"></path>
              <path d="m2,9v9.88c0,.27.11.53.31.72s.46.3.73.28c.04,0,3.93-.11,8.46,1.99v-12.09c-4.02-1.75-8.31-1.79-8.5-1.79-.55,0-1,.45-1,1Z"></path>
              <path d="m21,8c-.19,0-4.48.03-8.5,1.79v12.09c4.51-2.09,8.43-2,8.47-1.99.27.02.53-.09.73-.28.19-.19.3-.45.3-.72v-9.88c0-.55-.45-1-1-1Z"></path>
            </svg>
          </a>
          <a href="/skill">
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
              <path d="m16.71 16.71 4.7-4.71-4.7-4.71-1.42 1.42 3.3 3.29-3.3 3.29zM8.71 15.29 5.41 12l3.3-3.29-1.42-1.42L2.59 12l4.7 4.71zM14 3l-.98-.22-2 9-2 9L10 21l.98.22 2-9 2-9z"></path>
            </svg>
          </a>
          <a href="/contact">
            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">
              <path d="m19,2H5c-.55,0-1,.45-1,1v4h-2v2h2v2h-2v2h2v2h-2v2h2v4c0,.55.45,1,1,1h14c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Zm-3.13,14.5c-.08,0-3.22.15-5.62-2.25-2.4-2.41-2.25-5.55-2.25-5.62l1.63-1.13,1.64,2.45-1.3,1.21s.58,1.14,1.4,1.97c.83.83,1.97,1.41,1.97,1.41l1.21-1.31,2.45,1.64-1.13,1.63Z"></path>
            </svg>
          </a>
        </div>
    </>
}