import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export function SplitText({ children, ...props }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...props}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 0 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Section = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
      marginTop={10}
    >
      {children}
    </StyledDiv>
  )
}

export const Paragraph = styled(Text)`
  text-align: justify;
  text-indent: 1em;
  margin-top: 5px;
`

export const BioSection = styled(Box)`
  padding-left: 3.2em;
  text-indent: -3.4em;
  margin-top: 5px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
