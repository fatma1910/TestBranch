import React from 'react';
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from '@/components/ui/table';
import { Check } from 'lucide-react'; 
import { featureList, tablePlans } from '@/constant';

const ComparisonTable: React.FC = () => {
  return (
    <div id='comparison-table' className="mt-32 overflow-x-auto w-full max-w-[1102px]">
      <Table className="min-w-[1102px]">
        <TableHeader>
          <TableRow className="h-[56px] gap-0 rounded-lg opacity-100 text-black">
            <TableHead>Features</TableHead>
            {tablePlans.map((plan) => (
              <TableHead key={plan.title} className="text-center">
                {plan.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureList.map((feature, index) => (
            <TableRow
              key={feature}
              className={`h-[56px] gap-0 rounded-lg ${
                index % 2 === 0 ? 'bg-[#F7F7F7]' : 'bg-white'
              }`}
            >
              <TableCell>{feature}</TableCell>
              {tablePlans.map((plan) => (
                <TableCell key={plan.title + feature} className="text-center">
                  {typeof plan.features[feature as keyof typeof plan.features] === 'boolean'
                    ? plan.features[feature as keyof typeof plan.features] ? (
                        <Check className="inline text-main" />
                      ) : (
                        '❌'
                      )
                    : plan.features[feature as keyof typeof plan.features]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <tfoot>
          <TableRow className="h-[56px] gap-0 rounded-lg opacity-100 ">
            <TableCell></TableCell>
            {tablePlans.map((plan) => (
              <TableCell key={plan.title + '-footer'} className="text-center w-[202px]">
                <button className={`${plan.buttonStyle}`}>
                  {plan.buttonLabel}
                </button>
              </TableCell>
            ))}
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
};

export default ComparisonTable;
