export default function UserProfileItem({
    data
}) {
    return (
        <>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder={data.username} />
            <label htmlFor="first_name">First name</label>
            <input type="text" name="first_name" id="first_name" placeholder={data.first_name} />
            <label htmlFor="last_name">Last name</label>
            <input type="text" name="last_name" id="last_name" placeholder={data.last_name} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder={data.email} />
        </>
    )
}