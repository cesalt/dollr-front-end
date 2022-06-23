import { React } from "react";
import { Paper, Typography } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'
import { Divider } from '@mui/material'
import { Grid } from '@mui/material'
import { Avatar } from '@mui/material'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


export default function TransactionCard({obj}) {

    const {active_user_id, user_id, payment_amount, reason, payment_type, comments, created_at} = obj

    const in_dollars = parseFloat(payment_amount) / 100

    return (
        <>
            <ListItem alignItems="flex-start" button secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
            }>
                <ListItemAvatar>
                    <Avatar alt="CreamScile" src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography sx={{ display: 'center', color: 'grey[900]' }}>{active_user_id} paid {user_id} ${in_dollars}</Typography>}
                    secondary={reason} />
            </ListItem>
            <Divider variant="middle"/>
        </>

    )

}