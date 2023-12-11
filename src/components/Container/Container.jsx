import {StyledContainer} from "./Container.stayled"

export const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
        );
}