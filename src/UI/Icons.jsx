import React from 'react';

export function Heart({ color = 'ghost', }) {
  return (
    <svg viewBox="0 0 19 17" fill={color === 'red' ? "#F04393" : "none"} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0761 2.34319C16.6504 1.91736 16.1451 1.57956 15.5889 1.34909C15.0327 1.11862 14.4365 1 13.8344 1C13.2323 1 12.6362 1.11862 12.0799 1.34909C11.5237 1.57956 11.0184 1.91736 10.5927 2.34319L9.70941 3.22652L8.82608 2.34319C7.96633 1.48344 6.80027 1.00045 5.58441 1.00045C4.36855 1.00045 3.20249 1.48344 2.34274 2.34319C1.483 3.20293 1 4.36899 1 5.58485C1 6.80072 1.483 7.96678 2.34274 8.82652L3.22608 9.70985L9.70941 16.1932L16.1927 9.70985L17.0761 8.82652C17.5019 8.40089 17.8397 7.89553 18.0702 7.33932C18.3006 6.7831 18.4193 6.18693 18.4193 5.58485C18.4193 4.98278 18.3006 4.38661 18.0702 3.83039C17.8397 3.27418 17.5019 2.76882 17.0761 2.34319V2.34319Z" stroke={color === 'red' ? 'butt' : "#A6A6A6"} strokeLinecap={color === 'red' ? 'butt' : 'round'} strokeLinejoin={color === 'red' ? '' : "round"} />
    </svg>
  )
}

export function Plain() {
  return (
    <div style={{ marginTop: '19px', backgroundColor: 'rgba(0, 119, 255, 0.05)', borderRadius: '50px', height: '60px', width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path d="M15.5473 16.606C15.2953 16.8577 15.2953 17.2666 15.5473 17.5191C15.7993 17.7717 16.2072 17.7717 16.4587 17.5191C16.7108 17.2666 16.7108 16.8577 16.4587 16.606C16.2072 16.3534 15.7993 16.3534 15.5473 16.606Z" fill="#1157A7" />
          <path d="M25.7959 1.92236C24.6899 2.78031 24.3885 3.22252 20.4659 7.11216L18.1144 6.72847L19.1935 5.64727C19.9493 4.88998 19.9495 3.66474 19.1935 2.90745C18.4379 2.15041 17.2143 2.15016 16.4587 2.90745L13.4108 5.96134L2.75135 4.22249C2.06251 4.11049 1.3578 4.33879 0.864834 4.83272C-0.083082 5.78249 0.0455726 7.35383 1.12693 8.13786L11.7494 15.8455L9.76064 17.8384C9.07909 18.5212 8.3618 19.4604 7.62462 20.6332L2.67078 19.1736C1.93964 18.9584 1.15009 19.16 0.610042 19.7001C-0.309424 20.6213 -0.170446 22.1513 0.897564 22.8925L4.95862 25.7092C4.25165 27.2725 3.82188 28.4029 3.80199 28.4551C3.71185 28.6927 3.76951 28.9614 3.94877 29.141C4.12904 29.3216 4.39742 29.3779 4.63333 29.2881C4.68545 29.2684 5.81363 28.8375 7.37385 28.1292L10.1854 32.1984C10.9263 33.2703 12.4533 33.406 13.3718 32.4858C13.9106 31.9452 14.1117 31.1541 13.8967 30.4215L12.4402 25.4582C13.6115 24.7191 14.5483 24.0004 15.2296 23.318L17.2186 21.3251L24.9109 31.9684C25.6947 33.0536 27.263 33.1797 28.2099 32.231C28.7026 31.7373 28.9304 31.0307 28.8189 30.3403L27.0834 19.6607L30.1311 16.6071C30.8869 15.8498 30.8869 14.6238 30.1311 13.8667C29.3756 13.1095 28.1527 13.1095 27.3969 13.8667L26.3176 14.9479L25.9349 12.5918C29.8209 8.65752 30.2553 8.36263 31.112 7.25444C31.113 7.25318 31.1143 7.25166 31.1153 7.25015C33.1033 4.66875 33.5686 2.06161 32.2722 0.762205C30.9756 -0.536191 28.3733 -0.0705138 25.7959 1.92236ZM17.3701 3.82089C17.6219 3.56838 18.03 3.56838 18.2821 3.82089C18.5341 4.07341 18.5338 4.48131 18.2821 4.73383L16.5464 6.47268L14.9786 6.21688L17.3701 3.82089ZM1.88274 7.09148C1.44164 6.77186 1.39103 6.13187 1.77649 5.74591C1.97716 5.5446 2.26468 5.45152 2.54465 5.49718L19.3428 8.23751L12.6726 14.9205L1.88274 7.09148ZM1.52145 20.6138C1.7274 20.4077 2.02852 20.3305 2.30723 20.4127L6.94056 21.778C6.46672 22.6094 5.98861 23.5279 5.51176 24.5221L1.63147 21.8307C1.22436 21.5481 1.17099 20.9647 1.52145 20.6138ZM12.4599 31.5731C12.1124 31.9212 11.5293 31.8743 11.2451 31.4631L8.55894 27.575C9.55192 27.0967 10.4689 26.6174 11.2977 26.1436L12.66 30.7858C12.7421 31.0653 12.6653 31.367 12.4599 31.5731ZM28.3086 14.7799C28.5603 14.5277 28.9677 14.5274 29.2197 14.7799C29.4717 15.0325 29.4715 15.4411 29.2197 15.6936L26.8282 18.0896L26.5731 16.5188L28.3086 14.7799ZM27.5465 30.5474C27.592 30.8286 27.4991 31.1167 27.2985 31.3178C26.915 31.702 26.2758 31.6551 25.9553 31.2111L18.1416 20.4004L24.8117 13.7172L27.5465 30.5474ZM14.3182 22.4046C13.6089 23.1155 12.5709 23.8828 11.233 24.6858C9.49376 25.7294 7.43554 26.7178 5.57898 27.5079C6.38893 25.5972 7.39399 23.5017 8.45798 21.7391C9.2362 20.449 9.98119 19.4438 10.6723 18.7516C26.4165 3.01441 25.4837 3.82619 26.4392 3.06057C27.4991 2.99271 28.4322 3.30804 29.0817 3.95888C29.7313 4.60972 30.0463 5.54485 29.9786 6.60663C29.2127 7.56624 30.0133 6.64068 14.3182 22.4046ZM31.0816 4.90966C30.8756 4.19777 30.5098 3.56308 29.9934 3.04569C29.477 2.52855 28.8436 2.16176 28.1333 1.95541C29.0661 1.48141 30.6369 0.950646 31.3608 1.6754C31.9323 2.24829 31.7903 3.50935 31.0816 4.90966Z" fill="#1157A7" />
          <path d="M19.1935 12.9527L17.3706 14.7788C17.1189 15.0311 17.1189 15.44 17.3706 15.6923C17.6224 15.9445 18.0303 15.9443 18.2823 15.6923L20.1049 13.8659C20.3566 13.6139 20.3566 13.2049 20.1049 12.9527C19.8531 12.7004 19.4452 12.7004 19.1935 12.9527Z" fill="#1157A7" />
          <path d="M22.8396 9.29941L21.016 11.1263C20.7645 11.3786 20.7645 11.7875 21.016 12.0397C21.2681 12.2918 21.6759 12.2918 21.9277 12.0397L23.751 10.2129C24.0028 9.96059 24.0028 9.55167 23.751 9.29941C23.4992 9.04715 23.0914 9.04715 22.8396 9.29941Z" fill="#1157A7" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="33" height="33" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L13 5" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 1L13 5L9 9" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export function BigArrow() {
  return (
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}