import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Webcam from "react-webcam";
import { useMultiStepForm } from "../../components/MultiStepForm";
import VerificationFigure from "./figures/VerificationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function IdentityVerificationForm() {
  const { next, previous } = useMultiStepForm();
  const { t } = useTranslation();
  return (
    <HussainedForm
      title={t("register.identity_verification.title")}
      figure={VerificationFigure}
      actions={
        <HussainedFormActions>
          <Button onClick={previous}> {t("back", { ns: "common" })}</Button>
          <Button variant="contained" onClick={next}>
            {t("next", { ns: "common" })}
          </Button>
        </HussainedFormActions>
      }
    >
      <Webcam
        style={{
          borderRadius: "8px",
          background: "#D9D9D9",
          overflow: "hidden",
          width: "100%",
          height: "240px",
          objectFit: "cover",
        }}
      />
      <Stack alignItems="center">
        <IconButton
          color="primary"
          sx={{
            fontSize: 40,
          }}
        >
          <CameraAltIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </HussainedForm>
  );
}

export default IdentityVerificationForm;
