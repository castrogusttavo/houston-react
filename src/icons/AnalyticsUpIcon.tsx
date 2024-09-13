import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AnalyticsUpIcon({
  iconName = 'analytics-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
