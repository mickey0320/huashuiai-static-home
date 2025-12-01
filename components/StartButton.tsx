import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function StartButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-base" size="lg">
          <Zap className="h-4 w-4" />
          &nbsp;开始使用
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>项目还在研发中...</AlertDialogTitle>
          <AlertDialogDescription>
            项目还在研发中，可点击{" "}
            <Link href="/join-dev#qr-title" className="underline font-bold">
              这里
            </Link>{" "}
            免费加入项目技术分享群，及时了解项目进展，也可以{" "}
            <Link href="/join-dev" className="underline">
              申请加入项目研发组织
            </Link>
            ，学习和参与项目研发。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>知道了</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
