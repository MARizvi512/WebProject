import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {useState} from 'react';

const PaginationComponent = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [DotPage, setDotPage] = useState(1);

    const PageSet = (pageNumber) => {
        props.methodPageSet(pageNumber);
        setCurrentPage(pageNumber);
    }
    const PageDotSet = (pageNumber) => {
        props.methodPageSet(pageNumber);
        props.methodPageDotSet(pageNumber);
        setDotPage(pageNumber);
        setCurrentPage(pageNumber);
    }

    const PaginationNumber = () => {
        
        let totalPages=parseInt(props.data.length / props.pageSize);
        if(parseInt(props.data.length % props.pageSize))
        {
            totalPages+=1;
        }
        const collectPageButton=[];
        let flag=false;
        let count=0;


        if(currentPage > props.pageSize)
        {
            collectPageButton.push (
                <>
                    <PaginationItem>
                        <PaginationLink onClick={()=>{PageSet(1)}}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=>{PageDotSet(DotPage-props.pageSize)}}>...</PaginationLink>
                    </PaginationItem>
                </>
            );
        }
        
        for(var i=DotPage ; i<=totalPages;){

            count++;
            
            const s=i;
            if(count > props.pageSize)
            {
                collectPageButton.push (
                    <>
                        <PaginationItem>
                            <PaginationLink onClick={()=>{PageDotSet(s)}}>...</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={(e)=>{PageSet(totalPages)}}>{totalPages}</PaginationLink>
                        </PaginationItem>
                    </>
                    
                );
                break;
                
            }
            else
            {
                collectPageButton.push (
                
                    <PaginationItem>
                        <PaginationLink onClick={(e)=>{PageSet(s)}}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
            i++;
        }

        return (<>{collectPageButton}</>);
        
    }

    return (
        <Pagination>
            {PaginationNumber()}       
        </Pagination>
    )
}

export default PaginationComponent;