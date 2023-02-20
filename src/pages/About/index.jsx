import React from "react";
import Section from "../../components/Section";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import RegisterIcon from "../../components/icons/RegisterIcon";
import WindowsIcon from "../../components/icons/WindowsIcon";
import TargetIcon from "../../components/icons/TargetIcon";
import KeyIcon from "../../components/icons/KeyIcon";
import VoteIcon from "../../components/icons/VoteIcon";
import PriceTagIcon from "../../components/icons/PriceTagIcon";
import ProjectMember from "./ProjectMember";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Omar Tarek",
    displayImage: "/images/team-members/omar-tarek.jpg",
    linkedinProfile: "https://www.linkedin.com/in/omar-tareq9/",
    facebookProfile: "https://www.facebook.com/otareq",
  },
  {
    name: "Mohamed Abd-Elhalim",
    displayImage: "/images/team-members/mohamed-abdelhalim.jpg",
    linkedinProfile: "",
    facebookProfile: "",
  },
  {
    name: "Youssef Abdelrahman",
    displayImage: "/images/team-members/youssef-abdelrahman.jpg",
    linkedinProfile:
      "https://www.linkedin.com/in/youssef-abdelrahman-31380822a/",
    facebookProfile: "https://www.facebook.com/youssef.abdelrahman.96",
  },
  {
    name: "Mohamed Diab",
    displayImage: "/images/team-members/mohamed-diab.jpeg",
    linkedinProfile: "https://www.linkedin.com/in/mohamad-diab-b8180219b/",
    facebookProfile: "https://www.facebook.com/Mohamad.Diab2000",
  },
  {
    name: "Mohamed Khalid",
    displayImage: "/images/team-members/mohamed-khalid.jpg",
    linkedinProfile: "https://www.linkedin.com/in/mohamed-khaled-916b10234/",
    facebookProfile: "https://www.facebook.com/profile.php?id=100002159652083",
  },
];

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Section sx={{ minHeight: "unset" , paddingTop: 8}}>
        <Container
          maxWidth="lg"
          sx={{
            paddingY: 2,
            height: "100%",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              xs={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                color="secondary"
                fontWeight={"medium"}
                marginTop={1}
                marginBottom={2}
              >
                {t("landing.features.title")}
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9999 10.6667H22.6666V8.00001C22.6666 4.32001 19.6799 1.33334 15.9999 1.33334C12.3199 1.33334 9.33325 4.32001 9.33325 8.00001V10.6667H7.99992C6.53325 10.6667 5.33325 11.8667 5.33325 13.3333V26.6667C5.33325 28.1333 6.53325 29.3333 7.99992 29.3333H23.9999C25.4666 29.3333 26.6666 28.1333 26.6666 26.6667V13.3333C26.6666 11.8667 25.4666 10.6667 23.9999 10.6667ZM15.9999 22.6667C14.5333 22.6667 13.3333 21.4667 13.3333 20C13.3333 18.5333 14.5333 17.3333 15.9999 17.3333C17.4666 17.3333 18.6666 18.5333 18.6666 20C18.6666 21.4667 17.4666 22.6667 15.9999 22.6667ZM20.1333 10.6667H11.8666V8.00001C11.8666 5.72001 13.7199 3.86668 15.9999 3.86668C18.2799 3.86668 20.1333 5.72001 20.1333 8.00001V10.6667Z"
                      fill="#1A1FA3"
                    />
                  </svg>
                  <Typography variant="body1">
                    {t("landing.features.feat_1")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8_9)">
                      <path
                        d="M15.927 23.959L6.104 18.162L15.921 32.001L25.749 18.162L15.921 23.959H15.927ZM16.073 0L6.254 16.297L16.073 22.104L25.896 16.303L16.073 0Z"
                        fill="#1A1FA3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_9">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <Typography variant="body1">
                    {t("landing.features.feat_2")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="43"
                    viewBox="0 0 32 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.6094 29.9013H2.04215V26.3401H0V31.9397H5.6094V29.9013Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M26.3904 0V2.03838H29.9576V5.59957H31.9998V0H26.3904Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M2.04215 2.03771L5.6094 2.03838V0H0V5.59957H2.04215V2.03771Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M29.9576 29.9013H26.3904V31.9397H31.9998V26.3401H29.9576V29.9013Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M15.9986 26.3889C21.7637 26.3889 26.4371 21.7249 26.4371 15.9701C26.4371 10.216 21.7637 5.5513 15.9986 5.5513C10.2335 5.5513 5.56006 10.216 5.56006 15.9701C5.56006 21.7249 10.2335 26.3889 15.9986 26.3889Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M15.9982 28.448C10.8182 28.448 6.41531 33.1006 5.37888 36.4614C4.27999 40.0253 5.63753 42.6662 9.26388 42.6662H22.7325C26.3589 42.6662 27.7164 40.0253 26.6176 36.4615C25.5811 33.1006 21.1782 28.448 15.9982 28.448Z"
                      fill="#1A1FA3"
                    />
                  </svg>
                  <Typography variant="body1">
                    {t("landing.features.feat_3")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5485 6.52459C25.1915 6.52459 24.8321 6.67634 24.8321 6.67634C24.0966 7.09322 22.6693 7.97791 21.8803 7.84634C20.8532 7.67547 18.4881 7.65634 16.4967 8.0904C16.3692 8.0059 16.2414 7.91903 16.1152 7.8414C15.7302 7.60578 15.3527 7.4064 14.9778 7.25616C14.6144 7.11128 14.2524 7.01165 13.8738 6.99203V6.99003C13.3042 6.9429 12.7521 6.92328 12.2459 6.92328C11.4795 6.92472 10.8262 6.9679 10.3409 7.04703V7.04653L10.333 7.04703C10.2949 7.05047 10.1049 7.01853 9.88006 6.93609C9.53687 6.81528 9.09844 6.60415 8.69381 6.38909C8.28631 6.17303 7.91319 5.95803 7.64362 5.81265C7.51181 5.74147 7.36569 5.70859 7.21594 5.7174C4.95794 5.83915 3.15275 6.72003 1.92262 7.89197C0.695 9.0679 0.008125 10.5173 0 11.8842C0 12.3011 0.0675 12.711 0.216812 13.096C0.355812 13.4549 0.571562 13.7883 0.854812 14.0672C0.905625 14.132 0.952062 14.183 1.00187 14.235C1.12219 14.3573 1.2655 14.4874 1.43444 14.6416C1.93569 15.0958 2.65575 15.7463 3.12337 16.3336C3.58737 16.9134 3.88637 17.4422 4.13437 17.9135C4.25863 18.1482 4.36931 18.3702 4.48694 18.5818C4.536 18.6697 4.58781 18.7552 4.64206 18.8405L4.55912 18.923C4.26481 19.2107 4.10031 19.5957 4.09562 20.0076C4.09144 20.4186 4.24712 20.8084 4.53531 21.103C4.82794 21.4015 5.21925 21.5665 5.63731 21.5665C5.93044 21.5665 6.21056 21.482 6.45456 21.3278C6.29131 21.5733 6.20069 21.8601 6.19731 22.1615C6.19287 22.572 6.34931 22.9613 6.637 23.2554C6.92912 23.555 7.32094 23.7189 7.739 23.7189C8.06794 23.7189 8.37925 23.6119 8.64169 23.4204C8.16394 24.0199 8.19025 24.8938 8.73919 25.456C9.03156 25.7546 9.42244 25.9185 9.84019 25.9185H9.84069C10.2459 25.9185 10.6292 25.7624 10.9208 25.4767L11.2058 25.1938C11.0865 25.4128 11.0153 25.6554 11.0124 25.9107C11.0082 26.3227 11.1638 26.7115 11.4521 27.0056C11.7444 27.3042 12.1357 27.4691 12.5541 27.4691C12.9591 27.4691 13.3421 27.313 13.6362 27.0257L13.8154 26.844C13.9035 26.9162 13.9843 26.982 14.0499 27.0341L14.1785 27.1318C14.2215 27.1618 14.2465 27.1833 14.3275 27.2305C14.6535 27.4092 14.9653 27.4868 15.2132 27.5408C15.337 27.5668 15.4428 27.5845 15.5214 27.5953L15.6171 27.6075L15.6467 27.6105L15.6583 27.6115L15.6654 27.6129L15.673 27.6134L15.6833 27.6139C15.6926 27.6139 15.6882 27.6154 15.7376 27.6164L15.796 27.6139C16.3391 27.5742 16.8531 27.3876 17.2751 27.065C17.4431 26.9363 17.5901 26.7808 17.7217 26.6108C17.9814 26.6953 18.2568 26.7454 18.5434 26.7454C19.7188 26.7444 20.7074 25.9883 21.0761 24.9385C21.2587 24.9778 21.4453 25.0038 21.6387 25.0038C22.7936 25.0024 23.7706 24.2737 24.1546 23.2535L24.2503 23.2623C25.74 23.2623 26.9454 22.056 26.9459 20.5673C26.9469 20.1543 26.8894 19.6967 26.7318 19.2215C27.7546 18.318 29.2521 16.9232 29.5226 16.1656C29.6536 15.8013 29.9674 14.9793 30.1805 14.6813C30.5026 14.3293 31.3461 13.5358 31.3461 13.5358C33.2334 11.7831 30.9552 6.82215 25.5485 6.52459ZM24.2503 21.645C24.1035 21.645 23.9656 21.6156 23.8369 21.5626C23.7972 21.5449 23.7549 21.538 23.7137 21.5272L22.5672 20.1633C22.3144 19.8707 21.8714 19.8378 21.5789 20.0912C21.2852 20.3445 21.2528 20.7869 21.5057 21.0805L22.6974 22.4965C22.6075 23.0008 22.1696 23.3857 21.6388 23.3862C21.3668 23.3857 21.1252 23.288 20.9318 23.1195C20.8949 23.0872 20.8507 23.068 20.8093 23.0425L19.7623 21.7944C19.5095 21.5008 19.0666 21.4684 18.7737 21.7218C18.4806 21.9756 18.4482 22.417 18.7012 22.7111L19.6015 23.7908C19.6039 23.8173 19.5987 23.8438 19.6032 23.8703C19.6152 23.9356 19.6208 23.995 19.6208 24.0495C19.6199 24.645 19.1379 25.1262 18.5434 25.1272C18.3568 25.1272 18.1859 25.0801 18.0337 24.9981L16.7119 23.6341C16.4299 23.3685 15.986 23.3822 15.7209 23.6631C15.4555 23.9459 15.469 24.3892 15.7506 24.6549L16.5187 25.497C16.4639 25.6035 16.3944 25.7002 16.2914 25.7802C16.1487 25.8902 15.9526 25.9648 15.7294 25.9904C15.6641 25.9806 15.5757 25.9658 15.4702 25.9403C15.3416 25.9118 15.2072 25.8637 15.1343 25.8264C15.1144 25.8117 15.0636 25.7724 14.9902 25.714C14.9313 25.6673 14.8576 25.6064 14.7776 25.5416C14.8921 25.0457 14.7631 24.5037 14.3816 24.1148C14.0895 23.8153 13.6977 23.6513 13.2796 23.6513C13.071 23.6513 12.8691 23.6931 12.6816 23.7731L12.6531 23.7491C12.919 23.4658 13.0712 23.1025 13.0756 22.7116C13.0798 22.2997 12.9236 21.9108 12.6354 21.6167C12.3432 21.3187 11.9514 21.1532 11.5337 21.1532C11.2067 21.1532 10.8969 21.2592 10.6356 21.4488C10.847 21.1817 10.9697 20.8587 10.9734 20.513C10.9781 20.1015 10.8217 19.7127 10.5341 19.4185C10.2416 19.119 9.85006 18.9546 9.43181 18.9546C9.02669 18.9546 8.64375 19.1107 8.35237 19.3965L8.09237 19.6547C8.413 19.0738 8.33887 18.33 7.85206 17.8327C7.55944 17.5337 7.16787 17.3692 6.74956 17.3692C6.41619 17.3692 6.1015 17.4797 5.83631 17.6765C5.556 17.1527 5.15606 16.2826 4.38644 15.3227C3.93281 14.7567 3.37919 14.2298 2.91862 13.8055C2.68887 13.594 2.48219 13.4093 2.33069 13.2689C2.25531 13.1987 2.19369 13.1393 2.15469 13.101L2.11737 13.0607L2.11687 13.0602L2.11512 13.0617L2.0135 12.9428C1.88712 12.825 1.793 12.6851 1.72506 12.5108C1.65731 12.3365 1.61781 12.1263 1.61781 11.8843C1.61019 11.0889 2.07637 9.97147 3.03775 9.06459C3.95912 8.19009 5.3115 7.49984 7.08937 7.35447C7.41887 7.53709 7.89044 7.80522 8.39075 8.05115C8.70131 8.20384 9.02169 8.34828 9.34037 8.46115C9.66194 8.57209 9.972 8.66147 10.3331 8.6654C10.4222 8.6654 10.5059 8.65803 10.5828 8.64678L10.5948 8.64478C10.9372 8.58634 11.5434 8.54072 12.246 8.54166C12.7107 8.54072 13.2204 8.55934 13.7405 8.60253L13.7776 8.60447C13.9053 8.60797 14.1186 8.65359 14.3776 8.75815L14.4363 8.78516C12.2539 9.77103 9.16069 11.6667 8.14431 12.006C6.98362 12.393 6.88637 13.9415 9.49794 14.2312C12.1102 14.5218 14.4318 12.876 15.0119 12.5873C15.4286 12.3787 18.0747 12.6335 19.5406 12.7936C20.1869 13.4318 20.7536 14.024 21.1664 14.4717L24.3859 18.4075L24.4001 18.4237C24.8131 18.9015 25.0369 19.2893 25.1631 19.6217C25.2888 19.9541 25.3271 20.2409 25.3281 20.5674C25.3271 21.1624 24.8459 21.6441 24.2503 21.645Z"
                      fill="#1A1FA3"
                    />
                  </svg>

                  <Typography variant="body1">
                    {t("landing.features.feat_4")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_306_8513"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="33"
                    >
                      <path
                        d="M32 0.666229H0V32.6662H32V0.666229Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_306_8513)">
                      <path
                        d="M19.168 14.0852L19.692 13.5612C19.9586 13.2946 19.9876 13.0586 19.779 12.8532C19.5703 12.6479 19.3326 12.6812 19.066 12.9532L18.552 13.4672C17.9658 12.9143 17.2009 12.5896 16.396 12.5522C15.7804 12.5859 15.1909 12.8121 14.7109 13.199C14.2309 13.5859 13.8846 14.1138 13.7209 14.7082C13.6304 15.1532 13.658 15.6142 13.801 16.0452C13.981 16.5618 14.2111 17.0595 14.488 17.5312L12.232 19.7862C12.0886 19.5462 12.0018 19.2768 11.978 18.9982C11.9608 18.768 11.9922 18.5367 12.07 18.3192C12.1821 18.034 12.3092 17.7549 12.451 17.4832C12.533 17.332 12.5602 17.1572 12.528 16.9882C12.489 16.8077 12.3959 16.6434 12.261 16.5172C12.1788 16.4306 12.0794 16.3622 11.9691 16.3164C11.8589 16.2706 11.7403 16.2484 11.621 16.2512C11.5102 16.2486 11.4 16.2682 11.2969 16.3089C11.1939 16.3496 11.1 16.4106 11.021 16.4882C10.8021 16.7118 10.6298 16.9766 10.514 17.2672C10.3809 17.6017 10.3094 17.9574 10.3029 18.3172C10.2933 18.7312 10.3612 19.1432 10.503 19.5322C10.6722 19.9893 10.9173 20.4146 11.228 20.7902L9.91896 22.1002C9.79635 22.2064 9.70621 22.3451 9.65895 22.5002C9.64983 22.5658 9.65773 22.6326 9.6819 22.6943C9.70607 22.7559 9.74569 22.8103 9.79695 22.8522C9.83974 22.9083 9.89907 22.9494 9.96655 22.9699C10.034 22.9904 10.1063 22.9891 10.173 22.9662C10.3518 22.876 10.5122 22.7533 10.646 22.6042L11.854 21.3972C12.3029 21.7926 12.8376 22.0782 13.416 22.2312C13.9259 22.3637 14.4623 22.3554 14.968 22.2072C15.4576 22.0607 15.9028 21.794 16.263 21.4312C16.5448 21.1548 16.7662 20.8228 16.913 20.4562C17.0508 20.1067 17.1103 19.7312 17.087 19.3562C17.0715 19.0001 16.9884 18.6502 16.842 18.3252C16.6953 17.9972 16.4763 17.5776 16.185 17.0662L18.203 15.0492C18.3384 15.2911 18.4066 15.5647 18.4006 15.8419C18.3946 16.119 18.3147 16.3895 18.169 16.6252C18.0442 16.7931 17.9855 17.0009 18.0039 17.2093C18.0223 17.4176 18.1167 17.6119 18.269 17.7552C18.3474 17.8364 18.4416 17.9007 18.5459 17.944C18.6501 17.9873 18.7621 18.0089 18.875 18.0072C18.9862 18.0105 19.097 17.9906 19.2003 17.949C19.3035 17.9073 19.3971 17.8448 19.475 17.7652C19.6368 17.5932 19.7602 17.3886 19.837 17.1652C19.936 16.8933 19.9939 16.6082 20.009 16.3192C20.0433 15.9341 19.9878 15.5463 19.847 15.1862C19.6774 14.7871 19.4485 14.4159 19.168 14.0852ZM14.905 20.3952C14.6519 20.6529 14.3098 20.8039 13.949 20.8172C13.5364 20.8251 13.1327 20.6972 12.8 20.4532L14.924 18.3292C15.1262 18.6843 15.2535 19.077 15.298 19.4832C15.3025 19.6551 15.2691 19.8259 15.2004 19.9835C15.1316 20.1411 15.029 20.2816 14.9 20.3952H14.905ZM15.7489 16.2722C15.5876 15.9587 15.4878 15.6173 15.455 15.2662C15.4803 14.9596 15.6158 14.6725 15.8364 14.458C16.057 14.2435 16.3477 14.1161 16.655 14.0992C16.9919 14.136 17.3173 14.2433 17.61 14.4142L15.7489 16.2722Z"
                        fill="#1A1FA3"
                      />
                      <path
                        d="M31.5159 1.68024C31.5152 1.61484 31.5008 1.55033 31.4737 1.49081C31.4466 1.4313 31.4073 1.37808 31.3585 1.33459C31.3096 1.29111 31.2522 1.25832 31.19 1.23828C31.1277 1.21824 31.062 1.21141 30.9969 1.21823C30.8659 1.22495 30.7426 1.28231 30.653 1.3782C30.5635 1.4741 30.5147 1.60105 30.5169 1.73224C30.5169 1.79524 30.5039 3.28824 27.2029 3.71024C26.6311 3.78353 26.078 3.96293 25.5719 4.23923L23.9589 2.62524C23.8348 2.50108 23.6802 2.41177 23.5107 2.3663C23.3411 2.32084 23.1625 2.32082 22.9929 2.36624L14.9769 4.51523C14.723 4.52329 14.4817 4.62768 14.3019 4.80722L0.77594 18.3332C0.588469 18.5207 0.483154 18.7751 0.483154 19.0402C0.483154 19.3054 0.588469 19.5597 0.77594 19.7472L12.8559 31.8262C13.0435 32.0137 13.2978 32.119 13.5629 32.119C13.8281 32.119 14.0824 32.0137 14.2699 31.8262L27.7999 18.3012C27.979 18.122 28.0834 17.8815 28.0919 17.6282L30.2399 9.61023C30.2854 9.44065 30.2854 9.2621 30.2399 9.09253C30.1944 8.92296 30.1051 8.76834 29.9809 8.64423L26.3239 4.98724C26.6452 4.84438 26.9854 4.74839 27.3339 4.70224C31.6209 4.15424 31.5219 1.78024 31.5159 1.68024ZM26.1549 17.1132L13.5629 29.7052L2.89993 19.0402L15.4919 6.44723L22.9559 4.44723L24.0479 5.54022C23.5446 6.19347 23.1511 6.92438 22.8829 7.70422C22.3637 7.69858 21.8604 7.88355 21.4683 8.22409C21.0763 8.56463 20.8227 9.03711 20.7556 9.55206C20.6886 10.067 20.8127 10.5887 21.1044 11.0183C21.3962 11.4479 21.8353 11.7556 22.3387 11.8831C22.8421 12.0107 23.3748 11.9492 23.8359 11.7103C24.297 11.4715 24.6545 11.0718 24.8407 10.5871C25.027 10.1023 25.029 9.56609 24.8464 9.07996C24.6638 8.59382 24.3093 8.19151 23.8499 7.94922C24.0659 7.34034 24.372 6.76732 24.7579 6.24924L28.1579 9.64923L26.1549 17.1132ZM23.6099 8.99322C23.7497 9.13312 23.8448 9.3113 23.8833 9.50525C23.9218 9.6992 23.9019 9.90022 23.8262 10.0829C23.7505 10.2655 23.6223 10.4217 23.4579 10.5315C23.2935 10.6413 23.1002 10.7 22.9024 10.7C22.7047 10.7 22.5114 10.6413 22.347 10.5315C22.1826 10.4217 22.0544 10.2655 21.9787 10.0829C21.903 9.90022 21.8831 9.6992 21.9216 9.50525C21.9601 9.3113 22.0552 9.13312 22.1949 8.99322C22.3 8.89067 22.4268 8.8131 22.5659 8.76623C22.4953 9.05823 22.4415 9.35404 22.4049 9.65222C22.3924 9.78384 22.4325 9.91508 22.5164 10.0172C22.6004 10.1193 22.7214 10.1841 22.8529 10.1972C22.8696 10.1982 22.8863 10.1982 22.9029 10.1972C23.0275 10.1978 23.1478 10.1519 23.2402 10.0685C23.3327 9.9851 23.3907 9.87016 23.4029 9.74621C23.4369 9.477 23.486 9.20992 23.5499 8.94623C23.5659 8.96623 23.5909 8.97522 23.6099 8.99322Z"
                        fill="#1A1FA3"
                      />
                    </g>
                  </svg>

                  <Typography variant="body1">
                    {t("landing.features.feat_5")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 28.6663C22.6274 28.6663 28 23.2937 28 16.6663C28 10.0388 22.6274 4.66626 16 4.66626C9.37258 4.66626 4 10.0388 4 16.6663C4 23.2937 9.37258 28.6663 16 28.6663Z"
                      fill="#1A1FA3"
                    />
                    <path
                      d="M16 7.73292C16 7.5428 16 7.44773 16.0616 7.38868C16.1233 7.32963 16.2155 7.33359 16.3999 7.34149C17.8995 7.40579 19.3635 7.83093 20.6667 8.58335C22.0855 9.40252 23.2637 10.5807 24.0829 11.9996C24.9021 13.4184 25.3333 15.0279 25.3333 16.6663C25.3333 18.3047 24.9021 19.9141 24.0829 21.3329C23.2637 22.7517 22.0855 23.93 20.6667 24.7492C19.2479 25.5684 17.6384 25.9996 16 25.9996C14.3616 25.9996 12.7522 25.5684 11.3333 24.7492C10.0301 23.9968 8.9299 22.9415 8.12446 21.6749C8.0254 21.5192 7.97587 21.4413 7.9962 21.3584C8.01652 21.2755 8.09884 21.228 8.2635 21.1329L15.8 16.7817C15.8976 16.7253 15.9464 16.6972 15.9732 16.6508C16 16.6044 16 16.548 16 16.4353V7.73292Z"
                      fill="white"
                    />
                  </svg>
                  <Typography variant="body1">
                    {t("landing.features.feat_6")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                color="secondary"
                fontWeight={"medium"}
                marginTop={1}
                marginBottom={2}
              >
                {t("landing.steps.title")}
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <RegisterIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_1")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TargetIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_2")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WindowsIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_3")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <KeyIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_5")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <VoteIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_6")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section id="about">
        <Container
          maxWidth="lg"
          sx={{
            paddingY: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h2" color="secondary" fontWeight="medium">
              {t("landing.about.title")}
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {t("landing.about.p1")}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              fontWeight="medium"
              textAlign="center"
              id="contact"
            >
              {t("landing.about.meet_the_team")}
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              fontWeight="medium"
              textAlign="center"
            >
              {t("landing.about.meet_the_team_p1")}
            </Typography>
            <Grid container columnSpacing={3} rowSpacing={3}>
              {teamMembers.map((x) => (
                <Grid
                  item
                  xs
                  display="flex"
                  justifyContent="center"
                  key={x.name}
                >
                  <ProjectMember
                    name={x.name}
                    displayImage={x.displayImage}
                    facebookLink={x.facebookProfile}
                    linkedinLink={x.linkedinProfile}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

export default About;