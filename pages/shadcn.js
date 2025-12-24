import React from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
    Moon,
    Sun,
    Menu,
    CheckCircle2,
    Info,
    AlertTriangle,
    XCircle,
    Loader2,
    Star,
} from "lucide-react";

const chips = ["MUI", "Next.js 15", "React 19", "Emotion", "Design System"];
const milestones = ["Brief", "Design", "Build", "Launch"];
const deployments = [
    { env: "Production", status: "Healthy", region: "US East", latency: "120ms" },
    { env: "Staging", status: "Warning", region: "EU West", latency: "260ms" },
    { env: "Preview", status: "Healthy", region: "AP South", latency: "190ms" }
];

export default function ShadcnPage() {
    const [tab, setTab] = React.useState("overview");
    const [plan, setPlan] = React.useState("team");
    const [region, setRegion] = React.useState("us-east");
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [sheetOpen, setSheetOpen] = React.useState(false);
    const [sliderValue, setSliderValue] = React.useState([40]);
    const { mode, toggleTheme } = useTheme();

    const handleToast = () => {
        toast.success("Deployment queued successfully.");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* AppBar equivalent */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center gap-4 px-4">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">M</AvatarFallback>
                    </Avatar>
                    <h1 className="text-lg font-semibold flex-1">MUI Demo Hub</h1>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="mr-2"
                    >
                        {mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button variant="outline" onClick={() => setSheetOpen(true)}>
                        <Menu className="h-4 w-4 mr-2" />
                        Menu
                    </Button>
                    <Button variant="ghost">Docs</Button>
                    <Button>Get Started</Button>
                </div>
            </header>

            <div className="container py-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Main content area */}
                    <div className="md:col-span-7 space-y-4">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-wider text-muted-foreground">
                                Design Systems
                            </p>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Ship a polished UI fast with Material UI
                            </h2>
                            <p className="text-muted-foreground">
                                This starter mixes Next.js 15 and MUI 6 with a clean Pages Router
                                setup. Explore common components and layout patterns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Button size="lg">Launch Demo</Button>
                                <Button size="lg" variant="outline">
                                    View Components
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {chips.map((label) => (
                                    <Badge key={label} variant="outline">
                                        {label}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card on the right */}
                    <div className="md:col-span-5">
                        <Card>
                            <CardHeader>
                                <CardTitle>Weekly Update</CardTitle>
                                <CardDescription>
                                    All systems operational. Your build pipeline is healthy.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Alert>
                                    <CheckCircle2 className="h-4 w-4" />
                                    <AlertTitle>Success</AlertTitle>
                                    <AlertDescription>
                                        Deployments are running 12% faster this week.
                                    </AlertDescription>
                                </Alert>
                                <div className="space-y-2">
                                    <Input placeholder="Project Name" defaultValue="MUI Starter" />
                                    <Input placeholder="Team" defaultValue="Design Ops" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    Review
                                </Button>
                                <Button size="sm">Confirm</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <Separator className="my-6" />

                {/* Three column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="alerts" className="text-sm font-medium">
                                    Enable alerts
                                </label>
                                <Switch id="alerts" defaultChecked />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="updates" defaultChecked />
                                <label htmlFor="updates" className="text-sm font-medium">
                                    Auto-updates
                                </label>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Delivery speed</label>
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Activity */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertDescription>
                                    New release candidate is ready.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription>
                                    Two tasks need review.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <XCircle className="h-4 w-4" />
                                <AlertDescription>
                                    One integration failed.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button className="w-full">Create environment</Button>
                            <Button className="w-full" variant="outline">
                                Invite teammate
                            </Button>
                            <Button className="w-full" variant="ghost">
                                View reports
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Separator className="my-6" />

                {/* Tabs and Selects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tabs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tabs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={tab} onValueChange={setTab}>
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="usage">Usage</TabsTrigger>
                                    <TabsTrigger value="events">Events</TabsTrigger>
                                    <TabsTrigger value="access">Access</TabsTrigger>
                                </TabsList>
                                <div className="mt-4">
                                    <TabsContent value="overview" className="text-sm text-muted-foreground">
                                        Quick snapshot of your product metrics and system health.
                                    </TabsContent>
                                    <TabsContent value="usage" className="text-sm text-muted-foreground">
                                        Usage trends by region and feature adoption.
                                    </TabsContent>
                                    <TabsContent value="events" className="text-sm text-muted-foreground">
                                        Live activity feed with alerts and insights.
                                    </TabsContent>
                                    <TabsContent value="access" className="text-sm text-muted-foreground">
                                        Permissioned access and audit history.
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* Selects */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Selects</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Plan</label>
                                <Select value={plan} onValueChange={setPlan}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="starter">Starter</SelectItem>
                                        <SelectItem value="team">Team</SelectItem>
                                        <SelectItem value="enterprise">Enterprise</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Region</label>
                                <Select value={region} onValueChange={setRegion}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a region" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us-east">US East</SelectItem>
                                        <SelectItem value="eu-west">EU West</SelectItem>
                                        <SelectItem value="ap-south">AP South</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Separator className="my-6" />

                {/* Feedback and Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Feedback */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Feedback</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Button onClick={() => setDialogOpen(true)}>
                                    Open dialog
                                </Button>
                                <Button variant="outline" onClick={handleToast}>
                                    Show toast
                                </Button>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Progress</label>
                                <div className="flex items-center gap-4">
                                    <Progress value={66} className="flex-1" />
                                    <Loader2 className="h-7 w-7 animate-spin text-primary" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Navigation & Inputs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Navigation & Inputs</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">Home</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">Library</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Team</label>
                                <Select defaultValue="design">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select team" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="engineering">Engineering</SelectItem>
                                        <SelectItem value="product">Product</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Rating</label>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-5 w-5 ${star <= 4
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-muted-foreground"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Separator className="my-6" />

                {/* Stepper and Table */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Stepper */}
                    <div className="md:col-span-5">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Stepper</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {milestones.map((label, index) => (
                                        <div key={label} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${index <= 1
                                                        ? "border-primary bg-primary text-primary-foreground"
                                                        : "border-muted text-muted-foreground"
                                                        }`}
                                                >
                                                    {index < 1 ? (
                                                        <CheckCircle2 className="h-4 w-4" />
                                                    ) : (
                                                        index + 1
                                                    )}
                                                </div>
                                                {index < milestones.length - 1 && (
                                                    <div
                                                        className={`h-12 w-0.5 ${index < 1 ? "bg-primary" : "bg-muted"
                                                            }`}
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-1 pb-4">
                                                <p className="text-sm font-medium">{label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Table */}
                    <div className="md:col-span-7">
                        <Card>
                            <CardHeader>
                                <CardTitle>Deployments Table</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Environment</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Region</TableHead>
                                            <TableHead>Latency</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {deployments.map((row) => (
                                            <TableRow key={row.env}>
                                                <TableCell className="font-medium">
                                                    {row.env}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            row.status === "Healthy"
                                                                ? "default"
                                                                : "destructive"
                                                        }
                                                    >
                                                        {row.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{row.region}</TableCell>
                                                <TableCell>{row.latency}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Sheet (Drawer) */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Quick Links</SheetTitle>
                        <SheetDescription>
                            Navigate to different sections of the application.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-2">
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <a href="/">Home</a>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <a href="/shadcn">Shadcn</a>
                        </Button>
                        {["Dashboard", "Releases", "Teams", "Billing"].map((item) => (
                            <Button
                                key={item}
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSheetOpen(false)}
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <Button
                            className="w-full"
                            variant="outline"
                            onClick={() => setSheetOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm changes</DialogTitle>
                        <DialogDescription>
                            Apply the new configuration to your environment?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

ShadcnPage.useShadcn = true;
