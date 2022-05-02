import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCounts = 1;

function generatePageArray(from: number, to: number) {
  return [... new Array(to - from)].map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0)
};

export function Pagination({ 
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
 }: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters) / registersPerPage;
  
  const previousPage = currentPage > 1 
  ? generatePageArray(currentPage - 1 - siblingsCounts, currentPage - 1)
  : []; 

  const nextPages = currentPage < lastPage 
  ? generatePageArray(currentPage,  Math.min(currentPage + siblingsCounts, lastPage))
  : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCounts) && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCounts) && <Text color="gray.300" width="8" textAlign="center" >...</Text>}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange}/>
        })}

        <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        })}

        {(currentPage + siblingsCounts) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCounts) < lastPage && <Text color="gray.300" width="8" textAlign="center" >...</Text>}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}

      </Stack>
    </Stack>
  )
}