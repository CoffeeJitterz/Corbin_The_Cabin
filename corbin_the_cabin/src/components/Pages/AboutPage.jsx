import Card from "../shared/Card"

function AboutPage() {
  return (
    <Card title={true} text='About' size='medium' color='gold'>
      <div className='textBlock'>
        CorbinTheCabin.Com is a mysterious web page who's intentions are not yet clear
      </div>
    </Card>
  )
}

export default AboutPage
