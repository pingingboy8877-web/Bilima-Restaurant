import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("menu_items")
      .select("id,name,slug,description,price,image_url,featured,menu_categories(name,slug)")
      .eq("available", true)
      .order("featured", { ascending: false })
      .order("name");

    if (error) return NextResponse.json({ error: "Unable to load menu." }, { status: 500 });
    return NextResponse.json({ items: data ?? [] }, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" }
    });
  } catch {
    return NextResponse.json({ error: "Menu service is not configured." }, { status: 503 });
  }
}
