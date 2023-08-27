import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deleteBookingFromId } =
    useMutation({
      // mutationFn: (id) => deleteCabin(id),
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success("Booking Successfully Deleted");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: () => toast.error("Some error occured. Booking not deleted"),
    });
  return { isDeletingBooking, deleteBookingFromId };
}
