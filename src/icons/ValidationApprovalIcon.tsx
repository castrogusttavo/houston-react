import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ValidationApprovalIcon({
  iconName = 'validation-approval',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
