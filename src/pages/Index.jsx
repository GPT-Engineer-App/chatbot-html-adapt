import { useState } from "react";
import { Container, Text, VStack, IconButton, Box } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <IconButton aria-label="Open Chatbot" icon={<FaComments />} size="lg" onClick={handleChatbotToggle} />
      </VStack>
      {isChatbotOpen && (
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" width="40%" height="60%" zIndex="1000" bg="white" boxShadow="lg">
          <div id="voiceflow-chatbot"></div>
        </Box>
      )}
    </Container>
  );
};

export default Index;

<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: {
          projectID: '661177d3da0ccc92fa634e1e'
        },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>