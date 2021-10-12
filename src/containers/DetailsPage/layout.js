import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsContainer = styled.div`
 display: flex;
`;

const CompanyLogo = styled.img`
  height: 300px;
  width: 300px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 10px 30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Label = styled.span`
  font-weight: 600;
`;

const Info = styled.span`
  margin-left: 5px;
`;


export default function DetailsPageLayout({selectedEntity}) {
  const CompanyFullAddress = selectedEntity && `${selectedEntity.address} ${selectedEntity.province} ${selectedEntity.city} ${selectedEntity.postal_code}`;
  return (
    <DetailsContainer>
      {selectedEntity && (
        <>
          <CompanyLogo src={selectedEntity.image} />
          <DetailsWrapper>
            <InfoWrapper>
              <Label>Business Name:</Label>
              <Info>{selectedEntity.company_name}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Label>Address:</Label>
              <Info>{CompanyFullAddress}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Label>Website:</Label>
              <Info>{selectedEntity.website}</Info>
            </InfoWrapper>
          </DetailsWrapper>
        </>
      )}
    </DetailsContainer>
  )
};

DetailsPageLayout.propTypes = {
  selectedEntity: PropTypes.object
};
