import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
   <ContentLoader 
   speed={2}
   width={280}
   height={470}
   viewBox="0 0 280 470"
   backgroundColor="#f3f3f3"
   foregroundColor="#ecebeb"
   {...props}
 >
   <circle cx="144" cy="132" r="120" /> 
   <rect x="24" y="330" rx="10" ry="10" width="240" height="75" /> 
   <rect x="24" y="429" rx="10" ry="10" width="90" height="21" /> 
   <rect x="162" y="420" rx="25" ry="25" width="101" height="40" /> 
   <rect x="24" y="274" rx="10" ry="10" width="240" height="35" />
 </ContentLoader>
)

export default Skeleton

