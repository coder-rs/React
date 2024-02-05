export default function({children, buttons, ButtonContainer}){
  return(
    <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
    </>
  )
}