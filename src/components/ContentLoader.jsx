import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => {

  
return (
    <ContentLoader 
    className="shop_item shop_item_preloader"
    speed={2}
    viewBox="0 0 246 368"
    backgroundColor="#e6e6e6"
    foregroundColor="#a4ccc7"
  >
    <rect x="3" y="364" rx="0" ry="0" width="240" height="3" /> 
    <rect x="3" y="0" rx="0" ry="0" width="240" height="3" /> 
    <rect x="243" y="0" rx="0" ry="0" width="3" height="367" /> 
    <rect x="24" y="26" rx="5" ry="5" width="198" height="202" /> 
    <rect x="0" y="0" rx="0" ry="0" width="3" height="367" /> 
    <rect x="24" y="250" rx="5" ry="5" width="198" height="40" /> 
    <rect x="24" y="311" rx="6" ry="6" width="45" height="17" /> 
    <rect x="24" y="332" rx="6" ry="6" width="89" height="16" /> 
    <rect x="185" y="312" rx="3" ry="3" width="37" height="37" />
  </ContentLoader>
)
}

export default MyLoader