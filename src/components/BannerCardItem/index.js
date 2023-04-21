import './index.css'
// Write your code here.

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <div className={className}>
      <h1 className="head"> {headerText} </h1>
      <p className="para"> {description} </p>
      <button className="buttons"> Show More </button>
    </div>
  )
}

export default BannerCardItem
