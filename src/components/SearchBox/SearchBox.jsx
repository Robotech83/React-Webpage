import React from "react";
import { Box, Input } from "theme-ui";

export const SearchBox = ({ searchTerm, setSearchTerm }) => {
    return (
        <Box sx={{ width: '10%', maxWidth: '400px', mx: 'auto', mb: 3 }}>
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    borderRadius: '4px',
                    borderColor: 'primary',
                    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
                    '&:focus': {
                        borderColor: 'secondary',
                        boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.2)',
                        right: '75px',
                        position: 'absolute',
                    },
                }}
            />
        </Box>
    );
}