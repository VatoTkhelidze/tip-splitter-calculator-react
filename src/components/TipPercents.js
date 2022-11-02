import styled from "styled-components";

function TipPercents(){
    return(
        <PercentsContainer>
            <PercentButton>5%</PercentButton>
            <PercentButton>10%</PercentButton>
            <PercentButton>15%</PercentButton>
            <PercentButton>25%</PercentButton>
            <PercentButton>50%</PercentButton>
            <PercentCustom placeholder="Custom" type='number'></PercentCustom>
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
`

const PercentsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px;
    margin-top: 10px;
    width: 100%;
`

export default TipPercents;