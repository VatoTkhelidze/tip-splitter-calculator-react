import styled from "styled-components";

function TotalResult(){
    return(
        <ResultContainer>
            <TipAmountDiv>
                <ResultTextDiv>
                    <ResultText>Tip Amount</ResultText>
                    <PersonText>/ person</PersonText>
                </ResultTextDiv>
                <TipResult>$0.00</TipResult>
            </TipAmountDiv>
            <TotalAmountDiv>
                <ResultTextDiv>
                    <ResultText>Tip Amount</ResultText>
                    <PersonText>/ person</PersonText>
                </ResultTextDiv>
                <TipResult>$0.00</TipResult>
            </TotalAmountDiv>
            <ResetButton>RESET</ResetButton>
        </ResultContainer>
    );
};

const ResetButton = styled.button`
    background: #26C2AE;
    border-radius: 5px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #00474B;
    border: 0;
    height: 48px;
    margin-top: 32px;
`

const TipResult = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    text-align: right;
    letter-spacing: -0.666667px;
    color: #26C2AE;
`

const ResultTextDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const TotalAmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`

const PersonText = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    color: #7F9D9F;
`

const ResultText = styled.span`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`

const TipAmountDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #00474B;
    margin-top: 32px;
    border-radius: 15px;
    padding-top: 37px;
    padding-left: 24px;
    padding-right: 22px;
    padding-bottom: 24px;
    width: 86%;
`




export default TotalResult;