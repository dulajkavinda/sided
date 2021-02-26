import React from "react";
import styles from "./Toolbar.module.css";
import { motion } from "framer-motion";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { usePWAInstall } from "react-use-pwa-install";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";
export default function Toolbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const install = usePWAInstall();
  return (
    <div className={styles.title}>
      <>
        <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ textAlign: "center" }}>
              Media Bias in Sri Lanka
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p className={styles.para}>
                Presenting data analysed by the Ministry of Mass Media on the
                news reporting of eight television stations, during presidention
                election 2019, Sri Lanka
              </p>
              <img src="/election.jpg" />
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://economynext.com/worst-media-behaviour-in-election-history-election-commissioner-47087/";
                }}
              >
                Source
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <div className={styles.wrapper}>
        <div className={styles.hide_button}>
          <Button colorScheme="teal">Media Bias in Sri Lanka</Button>
          {/* <Button ml={3} onClick={onOpen} colorScheme="teal">
            Download
          </Button> */}
        </div>
        <span>
          <span className={styles.fliph}>s</span>ided.
          <span className={styles.news_span}>news</span>
        </span>
        <div>
          <Button onClick={onOpen} colorScheme="teal" leftIcon={<InfoIcon />}>
            Media Bias in Sri Lanka
          </Button>

          {/* <Button
            ml={3}
            onClick={install}
            colorScheme="gray"
            leftIcon={<GetAppIcon />}
          >
            App
          </Button> */}
        </div>
      </div>
    </div>
  );
}
