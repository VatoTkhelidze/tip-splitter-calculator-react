import styled from "styled-components";

function TotalResult({emptyy, tipAmount, totalAmount, peopleValue, setBillInputValue, setPeopleValue, setButtonValue, buttonValue, setCustom}){
    const cleanBoard = () =>{
        setBillInputValue('');
        setPeopleValue('');
        setButtonValue('');
        setCustom('');
    };
    
    return(
        <ResultContainer>
            <TipAmountDiv>
                <ResultTextDiv>
                    <ResultText>Tip Amount</ResultText>
                    <PersonText>/ person</PersonText>
                </ResultTextDiv>
                <TipResult>{tipAmount===0 || peopleValue <= 0 || isNaN(tipAmount) ? '$0.00': '$'+tipAmount.toFixed(2)}</TipResult>
            </TipAmountDiv>
            <TotalAmountDiv>
                <ResultTextDiv>
                    <ResultText>Total Amount</ResultText>
                    <PersonText>/ person</PersonText>
                </ResultTextDiv>
                <TipResult>{tipAmount===0 || peopleValue <= 0 || isNaN(tipAmount) ? '$0.00': '$'+totalAmount.toFixed(2)}</TipResult>
            </TotalAmountDiv>
            <ResetButton emptyy={emptyy} onClick={cleanBoard}>RESET</ResetButton>
        </ResultContainer>
    );
};

const ResetButton = styled.button`
    background: ${({emptyy})=> emptyy ? '#0D686D;' : '#26C2AE;'};
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
    @media only screen and (min-width: 1440px){
        margin-top: 132px;
    }
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
    @media only screen and (min-width: 1440px){
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 71px;
        text-align: right;
        letter-spacing: -1px;
    }
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
    @media only screen and (min-width: 1440px){
        width: 413px;
        height: 360px;
        padding-top: 40px;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 40px;
        margin-top: 0;
    }
`




export default TotalResult;