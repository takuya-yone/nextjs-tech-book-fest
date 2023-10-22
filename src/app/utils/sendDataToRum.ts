import { AwsRum, AwsRumConfig } from "aws-rum-web";

const sendDataToRum = (): void => {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      guestRoleArn:
        "arn:aws:iam::123456789012:role/RUM-Monitor-ap-northeast-1-123456789012-5880751008961-Unauth",
      identityPoolId: "ap-northeast-1:4c9b40d2-6a82-4b14-8e23-aaaaaaaaaa",
      endpoint: "https://dataplane.rum.ap-northeast-1.amazonaws.com",
      telemetries: ["performance", "errors", "http"],
      allowCookies: true,
      enableXRay: true,
    };

    const APPLICATION_ID: string = "287874cb-9a11-48cc-b6cf-aaaaaaaaaaaa";
    const APPLICATION_VERSION: string = "1.0.0";
    const APPLICATION_REGION: string = "ap-northeast-1";

    const awsRum: AwsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
};

export default sendDataToRum;
