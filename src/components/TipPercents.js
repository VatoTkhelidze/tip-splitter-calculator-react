import styled from "styled-components";

function TipPercents({setButtonValue,setCustom, custom}){
    return(
        <PercentsContainer>
            <PercentButton onClick={()=>setButtonValue(5)}>5%</PercentButton>
            <PercentButton onClick={()=>setButtonValue(10)}>10%</PercentButton>
            <PercentButton onClick={()=>setButtonValue(15)}>15%</PercentButton>
            <PercentButton onClick={()=>setButtonValue(25)}>25%</PercentButton>
            <PercentButton onClick={()=>setButtonValue(50)}>50%</PercentButton>
            <PercentCustom onChange={(e)=>setCustom(e.target.value)} value={custom} placeholder="Custom" type='number'></PercentCustom>
        </PercentsContainer>
    );
};

const PercentCustom = styled.input`
    width: 130.63px;
    height: 48px;
    background: #F3F9FA;
    border-radius: 5px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #00474B;
    outline: unset;
    border: 0;
    padding-right: 15px;

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media only screen and (min-width: 768px){
        width: 102px;
        height: 48px;
    }
`


const PercentButton = styled.button`
    width: 146.63px;
    height: 48px;
    background: #00474B;
    border-radius: 5px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    border: 0;
    cursor: pointer;
    :focus{
        background: #26C2AE;
        color: #00474B;
    };
    @media only screen and (min-width: 768px){
        width: 117px;
        height: 48px;
    }
`

const PercentsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px;
    margin-top: 10px;
    width: 100%;
    @media only screen and (min-width: 768px){
        grid-template-columns: auto auto auto;
    }
`

export default TipPercents;