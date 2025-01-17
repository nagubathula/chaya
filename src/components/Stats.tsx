import React from 'react';
import clsx from 'clsx';

import useCountUp from '../hooks/useCountUp';

import Icon, { IconInputType } from './Icon';

export type StatsProps = {
  title?: string,
  description?: string,
  value: number,
  valuePostfix: number,
  statsIcon?: IconInputType,
  moreInfo?: { link: string, onClick: () => void, label: string, isActive?: boolean },
  change?: 'positive' | 'negative' | null,
  duration?: number,
  className?: string,
  roundFrom?: number
};

const Stats = ({
  title, description, value, valuePostfix, statsIcon, moreInfo, change, duration = 2000, className,
  roundFrom = 1000,
}: StatsProps) => {
  const StatsValue = useCountUp(0, value, duration, roundFrom);
  const StatsValuePostfix = useCountUp(0, valuePostfix, duration, roundFrom);

  return (
    <div
      className={clsx([
        'dsr-flex dsr-flex-col dsr-gap-3 dsr-rounded-lg dsr-p-6 dsr-bg-white dark:dsr-bg-neutral-800',
        className,
      ])}
    >
      <div className="dsr-flex dsr-items-center">
        {statsIcon && (
          <div className="dsr-flex dsr-rounded dsr-p-3 dsr-mr-4 dsr-bg-primary dsr-text-white">
            <Icon icon={statsIcon} size={50} />
          </div>
        )}
        <div>
          {title && <p className="dsr-block dsr-text-xl dsr-font-medium dsr-text-color">{title}</p>}
          {description && (
            <p className="dsr-block dsr-text-md dsr-font-medium dsr-text-gray-400 dsr-break-all">
              {description}
            </p>
          )}
          <div className="dsr-flex dsr-gap-2">
            {value !== 0 && (
              <div className="dsr-flex dsr-gap-1 text-color dsr-text-xl dsr-font-medium">
                {StatsValue}
              </div>
            )}
            {valuePostfix !== 0 && (
              <div
                className={clsx([
                  'dsr-flex dsr-items-center dsr-font-medium',
                  value === 0 ? 'dsr-text-xl' : 'dsr-text-md',
                  change ? change === 'positive' ? 'dsr-text-green-500' : 'dsr-text-red-500' : '',
                ])}
              >
                {change && (
                  <Icon
                    icon={change === 'positive' ? 'chevron-up' : 'chevron-down'}
                    size={16}
                  />
                )}
                <div className="dsr-flex dsr-gap-2">{StatsValuePostfix}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {moreInfo && (
        <button
          className="dsr-flex dsr-gap-2 dsr-items-center dsr-mb-0 hover:dsr-text-gray-500 active:dsr-text-primary"
          onClick={moreInfo?.onClick}
        >
          {moreInfo?.label}
          <Icon
            icon="chevron-down"
            size={16}
            className={clsx([
              'dsr-transition dsr-duration-250',
              moreInfo?.isActive && 'dsr-rotate-180',
            ])}
          />
        </button>
      )}
    </div>
  );
};
export default Stats;
