(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(10661)}])},10661:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(85893),s=n(25675),i=n.n(s),r=n(83078),p=n(67294),o=n(4672),u=n(67225),d=n(41942),l=n(35553);function c(e){let{nftAddress:t,tokenId:n,isVisible:s,marketplaceAddress:i,onClose:u}=e,c=(0,d.aa)(),[y,m]=(0,p.useState)(0),f=()=>{c({type:"success",message:"listing updated",title:"Listing updated - please refresh (and move blocks)",position:"topR"}),u&&u(),m("0")},{runContractFunction:b}=(0,r.JX)({abi:o,contractAddress:i,functionName:"updateListing",params:{nftAddress:t,tokenId:n,newPrice:l.fi(y||"0")}});return(0,a.jsx)(d.O,{isVisible:s,onCancel:u,onCloseButtonPressed:u,onOk:()=>{b({onError:e=>{console.log(e)},onSuccess:()=>f()})},children:(0,a.jsx)(d.K,{label:"Update listing price in L1 Currency (ETH)",name:"New listing price",type:"number",onChange:e=>{m(e.target.value)}})})}let y=(e,t)=>{if(e.length<=t)return e;let n=t-3;return e.substring(0,Math.ceil(n/2))+"..."+e.substring(e.length-Math.floor(n/2))};function m(e){let{price:t,nftAddress:n,tokenId:s,marketplaceAddress:m,seller:f}=e,[b,x]=(0,p.useState)(""),{isWeb3Enabled:k,account:v}=(0,r.Nr)(),[I,h]=(0,p.useState)(""),[N,g]=(0,p.useState)(""),[w,A]=(0,p.useState)(!1),M=()=>A(!1),_=(0,d.aa)(),{runContractFunction:j}=(0,r.JX)({abi:u,contractAddress:n,functionName:"tokenURI",params:{tokenId:s}}),{runContractFunction:C}=(0,r.JX)({abi:o,contractAddress:m,functionName:"buyItem",msgValue:t,params:{nftAddress:n,tokenId:s}});async function F(){let e=await j();if(console.log("The tokenURI is ".concat(e)),e){let t=e.replace("ipfs://","https://ipfs.io/ipfs/"),n=await (await fetch(t)).json(),a=n.image,s=a.replace("ipfs://","https://ipfs.io/ipfs/");x(s),h(n.name),g(n.description)}}(0,p.useEffect)(()=>{k&&F()},[k]);let E=f===v||void 0===f,L=E?"you":y(f||"",15),O=()=>{E?A(!0):C({onError:e=>console.log(e),onSuccess:()=>P()})},P=()=>{_({type:"success",message:"Item bought!",title:"Item Bought",position:"topR"})};return(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:b?(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{isVisible:w,tokenId:s,marketplaceAddress:m,nftAddress:n,onClose:M}),(0,a.jsx)(d.r,{title:I,description:N,onClick:O,children:(0,a.jsx)("div",{className:"p-2",children:(0,a.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(0,a.jsxs)("div",{children:["#",s]}),(0,a.jsxs)("div",{className:"italic text-sm",children:["Owned by ",L]}),(0,a.jsx)(i(),{loader:()=>b,src:b,height:"200",width:"200"}),(0,a.jsxs)("div",{className:"font-bold",children:[l.bM(t,"ether")," ETH"]})]})})})]}):(0,a.jsx)("div",{children:"Loading..."})})})}var f=n(48036),b=n(16991),x=n(7297),k=n(81621);function v(){let e=(0,x.Z)(['\n    {\n        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {\n            id\n            buyer\n            seller\n            nftAddress\n            tokenId\n            price\n        }\n    }\n']);return v=function(){return e},e}let I=(0,k.Ps)(v());function h(){let{isWeb3Enabled:e,chainId:t}=(0,r.Nr)(),n=t?parseInt(t).toString():"31337",s=f[n].NftMarketplace[0],{loading:i,error:p,data:o}=(0,b.a)(I);return(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-bold text-2xl",children:"Recently Listed"}),(0,a.jsx)("div",{className:"flex flex-wrap",children:e?i||!o?(0,a.jsx)("div",{children:"Loading..."}):o.activeItems.map(e=>{console.log(e);let{price:t,nftAddress:n,tokenId:i,seller:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(m,{price:t,nftAddress:n,tokenId:i,marketplaceAddress:s,seller:r},"".concat(n).concat(i))})}):(0,a.jsx)("div",{children:"Web3 Currently Not Enabled"})})]})}},67225:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"ItemMinted","inputs":[{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"TOKEN_URI","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getTokenCounter","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"mintNft","constant":false,"payable":false,"inputs":[],"outputs":[]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]}]')},4672:function(e){"use strict";e.exports=JSON.parse('[{"type":"error","name":"NftMarketplace__AlreadyListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__NoProceeds","inputs":[]},{"type":"error","name":"NftMarketplace__NotApprovedForMarketplace","inputs":[]},{"type":"error","name":"NftMarketplace__NotListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__NotOwner","inputs":[]},{"type":"error","name":"NftMarketplace__PriceMustBeAboveZero","inputs":[]},{"type":"error","name":"NftMarketplace__PriceNotMet","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}]},{"type":"error","name":"NftMarketplace__TransferFailed","inputs":[]},{"type":"event","anonymous":false,"name":"ItemBought","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"event","anonymous":false,"name":"ItemCanceled","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":false}]},{"type":"event","anonymous":false,"name":"ItemListed","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"function","name":"buyItem","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"cancelListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"getListing","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"tuple","components":[{"type":"uint256","name":"price"},{"type":"address","name":"seller"}]}]},{"type":"function","name":"getProceeds","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"seller"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"listItem","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}],"outputs":[]},{"type":"function","name":"updateListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"newPrice"}],"outputs":[]},{"type":"function","name":"withdrawPayments","constant":false,"payable":false,"inputs":[],"outputs":[]}]')},48036:function(e){"use strict";e.exports=JSON.parse('{"5":{"NftMarketplace":["0x63d91d75360e4fB78527e7C67489894989778975"]},"31337":{"NftMarketplace":["0x5FbDB2315678afecb367f032d93F642f64180aa3"]}}')}},function(e){e.O(0,[742,675,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);