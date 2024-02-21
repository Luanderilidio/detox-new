import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "react-responsive";

export default function MasonryImageList(props: any) {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Box>
      <ImageList variant="masonry" cols={isMobile ? 2 : 4} gap={8}>
        {props.images.map((item: any) => (
          <ImageListItem key={item.title}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
