import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ArrowDownUp } from 'lucide-react';
import { toast } from 'sonner';

export function SwapDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full p-2">
          <ArrowDownUp className="h-8 w-8" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will convert your selected coin to another USD.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => toast.error('Operation cancelled')}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => toast.success('Swapped successfully')}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
