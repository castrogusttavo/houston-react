import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoneySend02Icon({
  iconName = 'money-send-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
