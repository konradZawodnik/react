"use client";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Row, Col } from "react-bootstrap";
import { DraggableBullet } from "./DraggableBullet/DraggableBullet";
import { z } from "zod";
import { useDrop } from "react-dnd";
import CreatableSelect from "react-select/creatable";
import dynamic from "next/dynamic";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "react-quill/dist/quill.snow.css";

export const ItemType = "BULLET";

export default function InformationForm() {
  const [bullets, setBullets] = useState<string[]>([]);

  const FormSchema = z.object({
    title: z.string({
      required_error: "Product title is required",
    }),
    description: z.string().optional(),
    bullets: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
  });

  type FormData = z.infer<typeof FormSchema>;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
  } = form;

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const moveBullet = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedBullets = [...bullets];
      const [draggedBullet] = updatedBullets.splice(dragIndex, 1);
      updatedBullets.splice(hoverIndex, 0, draggedBullet);
      setBullets(updatedBullets);
      setValue("bullets", updatedBullets);
    },
    [bullets, setValue]
  );

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item: { index: number }) => moveBullet(item.index, bullets.length),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleAddBullet = () => {
    const newBullets = [...bullets, ""];
    setBullets(newBullets);
    setValue("bullets", newBullets);
  };

  const handleRemoveBullet = (index: number) => {
    const updatedBullets = bullets.filter((_, i) => i !== index);
    setBullets(updatedBullets);
    setValue("bullets", updatedBullets);
  };

  const handleChangeBullet = (index: number, value: string) => {
    const updatedBullets = [...bullets];
    updatedBullets[index] = value;
    setBullets(updatedBullets);
    setValue("bullets", updatedBullets);
  };

  const handleKeywordChange = (newValue: any) => {
    setValue(
      "keywords",
      newValue ? newValue.map((item: { label: string }) => item.label) : []
    );
  };

  useEffect(() => {
    register("description", { required: false });
  }, [register]);

  const onEditorStateChange = (editorState: string) => {
    setValue("description", editorState);
  };

  const editorContent = watch("description");

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form {...form}>
            <Label className="flex font-bold justify-center mb-4 mt-3 text-lg">
              Product Information Form
            </Label>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 space-y-4 w-full">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-center text-base text-[#112950]">
                        Product Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border border-gray-500 rounded"
                          placeholder="Enter product title"
                          type="text"
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col mb-4 rounded">
                <FormField
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-center mb-2 text-base">
                        Product Description
                      </FormLabel>
                      <FormControl>
                        <ReactQuill
                          {...field}
                          className="h-full"
                          theme="snow"
                          value={editorContent}
                          onChange={onEditorStateChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div
                className={`flex flex-col ${
                  bullets.length ? "mb-[calc(12vh)]" : "mb-2"
                } max-h-32 rounded`}
              >
                <FormField
                  name="bullets"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-center mb-2 text-base">
                        Product Bullets
                      </FormLabel>
                      <FormControl>
                        <div
                          className="h-full max-h-[150px] border border-gray-500 mb-4 overflow-auto p-2.5"
                          ref={(node) => {
                            drop(node);
                          }}
                        >
                          {bullets.map((bullet, index) => (
                            <DraggableBullet
                              {...field}
                              key={index}
                              index={index}
                              bullet={bullet}
                              moveBullet={moveBullet}
                              handleRemoveBullet={handleRemoveBullet}
                              handleChangeBullet={handleChangeBullet}
                            />
                          ))}
                          <Button
                            className="bg-[#0068fa] border border-solid cursor-pointer hover:bg-[#0068fa] p-2 rounded text-white w-full"
                            variant="default"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddBullet();
                            }}
                          >
                            Add Bullet
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col mb-4">
                <FormField
                  name="keywords"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        aria-label="Product Keywords"
                        className="flex justify-center mb-2 text-base"
                      >
                        Product Keywords
                      </FormLabel>
                      <FormControl>
                        <CreatableSelect
                          {...field}
                          className="cursor-pointer"
                          isMulti
                          onChange={handleKeywordChange}
                          options={[]}
                          value={field.value?.map((keyword) => ({
                            label: keyword,
                            value: keyword,
                          }))}
                          isClearable
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col justify-center items-center mb-4 w-full">
                <Button
                  className="bg-[#0068fa] border border-solid cursor-pointer flex justify-center hover:bg-[#0068fa] max-w-32 ml-0 mt-4 p-2 rounded text-white w-full"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
