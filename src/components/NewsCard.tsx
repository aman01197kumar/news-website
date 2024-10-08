import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface NewsCardProps {
  title: string;
  publishedAt: string;
  source: { name: string };
}

const NewsCard = ({ title, publishedAt, source }: NewsCardProps) => {
  return (
    <Card
      sx={{
        width: 272,
        height: 'auto',
        display: "flex",
        flexDirection: "column",
        border: 1,
      }}
    >
      <CardContent sx={{ flexGrow: 1}}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {source.name}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {publishedAt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
