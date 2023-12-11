import { SectionTitle } from "./Section.stayled"

export const Section = ({title, children}) => {
    return (
            <div>
                <SectionTitle>{title}</SectionTitle> 
                {children}
            </div>
        )
}
