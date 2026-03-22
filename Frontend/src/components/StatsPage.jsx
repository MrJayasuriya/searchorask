import { useEffect, useState } from 'react';
import { getAvailableUsers } from '../api';
import Section from './Section';
import { Gradient } from './design/Roadmap';
import Button from './Button';

const StatsPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAvailableUsers();
                // Backend returns tuples likely: [id, name, email, mobile, purpose, created_at?] or similar depending on schema
                // Or if it returns dicts. Let's assume it returns what fetchall returns (list of tuples) or list of dicts.
                // Looking at main.py: values = (data.name, data.email, data.mobile, data.purpose)
                // Table schema isn't fully visible but let's assume standard postgres fetchall which returns tuples.
                // However, usually FastAPI with pydantic response_model handles serialization, but here it returns raw `cur.fetchall()`.
                // `cur.fetchall()` returns a list of tuples.
                // We'll display them as is for now or map them if we know indices.
                // Assuming indices: 0:id?, 1:name, 2:email?
                // Let's just display the count primarily as requested, and a raw list for debugging/viewing.
                setUsers(data);
            } catch (err) {
                setError('Failed to load users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] min-h-screen bg-n-8 text-n-1 overflow-y-auto">
            <Section className="custom-paddings" id="stats">
                <div className="container relative z-2">
                    <div className="flex justify-start mb-8">
                        <Button href="/">Back to Home</Button>
                    </div>
                    <div className="text-center mb-10">
                        <h1 className="h1 mb-6">Early Access Stats</h1>
                        <p className="body-1 text-n-4">
                            Overview of registered users for editly-ai.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto border border-n-6 rounded-[2rem] bg-n-7 p-8 lg:p-12">
                        {loading && <div className="text-center h4">Loading...</div>}
                        {error && <div className="text-center h4 text-color-3">{error}</div>}

                        {!loading && !error && (
                            <div className="text-center">
                                <div className="h2 mb-4">{users.length}</div>
                                <div className="body-2 text-n-4 mb-8">Total Registered Users</div>

                                {users.length > 0 && (
                                    <div className="text-left mt-10 overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="border-b border-n-6 text-n-4">
                                                    <th className="py-2 px-4 text-left">ID</th>
                                                    <th className="py-2 px-4 text-left">Name</th>
                                                    <th className="py-2 px-4 text-left">Email</th>
                                                    <th className="py-2 px-4 text-left">Mobile</th>
                                                    <th className="py-2 px-4 text-left">Purpose</th>
                                                    <th className="py-2 px-4 text-left">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user, index) => (
                                                    <tr key={index} className="border-b border-n-6/50 hover:bg-n-6/20 transition-colors">
                                                        <td className="py-3 px-4 text-n-4">{user[0]}</td>
                                                        <td className="py-3 px-4 text-white font-medium">{user[1]}</td>
                                                        <td className="py-3 px-4 text-n-3">{user[2]}</td>
                                                        <td className="py-3 px-4 text-n-3">{user[3]}</td>
                                                        <td className="py-3 px-4 text-n-3">{user[4]}</td>
                                                        <td className="py-3 px-4 text-n-4 text-sm">
                                                            {user[5] ? new Date(user[5]).toLocaleDateString() + ' ' + new Date(user[5]).toLocaleTimeString() : '-'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <Gradient />
                </div>
            </Section>
        </div>
    );
};

export default StatsPage;
