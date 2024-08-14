import { Body, Grid, P, Img, ParentDiv } from './StyledCM'
const CreateProducts = (props) => {
    const whenClicked = props.items
    return (
        <Body>
            <Grid>
                {
                    whenClicked.map((item) => {
                        const ML = item.title === 'Mobile' ? 'red' : 'blue'
                        return (
                            <ParentDiv key={Math.random()} style={{ borderColor: `${ML}`, boxShadow: `0px 0px 25px 0px ${ML}` }}>
                                <P>{item.title}</P>
                                <Img src={require(`../images/${item.title === "Mobile" ? 'Mobile.jpg' : 'Laptop.jpg'}`)} />
                                <P>{item.content}</P>
                            </ParentDiv>
                        )
                    })
                }
            </Grid>
        </Body>
    )
}
export default CreateProducts